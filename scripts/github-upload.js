// scripts/github-upload.js
// Uploads this entire project directly to GitHub using the GitHub REST API (no local git required)

import fs from 'fs';
import path from 'path';

const GITHUB_TOKEN = process.argv[2] || process.env.GITHUB_TOKEN;
const REPO_NAME = process.argv[3] || process.env.REPO_NAME || '50-maktab-andijan';
const IS_PRIVATE = process.argv[4] === 'private';

if (!GITHUB_TOKEN) {
  console.error('\n❌ Xatolik: GitHub Token ko\'rsatilmadi!');
  console.log('\nIshlatish tartibi:');
  console.log('node scripts/github-upload.js <GITHUB_TOKEN> [REPO_NAME] [public/private]\n');
  console.log('Token olish uchun: https://github.com/settings/tokens (repo huquqi bilan "Generate new token")\n');
  process.exit(1);
}

const IGNORE_PATTERNS = [
  'node_modules',
  'dist',
  'dist-ssr',
  '.env',
  '.git',
  '.vercel',
  '.system_generated',
  '.DS_Store'
];

function shouldIgnore(filePath) {
  return IGNORE_PATTERNS.some(pattern => filePath.includes(pattern));
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (shouldIgnore(fullPath)) return;

    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

async function githubRequest(endpoint, method = 'GET', data = null) {
  const headers = {
    'Authorization': `token ${GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Maktab50-Deployer',
    'Content-Type': 'application/json'
  };

  const response = await fetch(`https://api.github.com${endpoint}`, {
    method,
    headers,
    body: data ? JSON.stringify(data) : null
  });

  const resData = await response.json().catch(() => ({}));
  return { status: response.status, ok: response.ok, data: resData };
}

async function run() {
  console.log(`\n🚀 50-Maktab loyihasini GitHub-ga yuklash boshlanmoqda...`);

  // 1. Foydalanuvchi ma'lumotlarini olish
  const userRes = await githubRequest('/user');
  if (!userRes.ok) {
    console.error('❌ GitHub token yaroqsiz:', userRes.data.message || userRes.status);
    process.exit(1);
  }
  const username = userRes.data.login;
  console.log(`✅ GitHub foydalanuvchisi: @${username}`);

  // 2. Repozitoriya mavjudligini tekshirish yoki yangi yaratish
  console.log(`📦 Repozitoriya: ${REPO_NAME}`);
  const repoRes = await githubRequest(`/repos/${username}/${REPO_NAME}`);

  if (!repoRes.ok) {
    console.log(`➕ Yangi repozitoriya yaratilmoqda...`);
    const createRes = await githubRequest('/user/repos', 'POST', {
      name: REPO_NAME,
      description: "50-Maktab (Andijon viloyati) rasmiy veb-sayti va 50 Maktab AI aqlli assistenti",
      private: IS_PRIVATE,
      auto_init: true
    });

    if (!createRes.ok) {
      console.error('❌ Repozitoriya yaratishda xatolik:', createRes.data.message);
      process.exit(1);
    }
    console.log(`✅ Repozitoriya yaratildi: https://github.com/${username}/${REPO_NAME}`);
    // Kichik tanaffus GitHub repo to'liq initsializatsiya bo'lishi uchun
    await new Promise(r => setTimeout(r, 2000));
  } else {
    console.log(`ℹ️ Repozitoriya mavjud: https://github.com/${username}/${REPO_NAME}`);
  }

  // 3. Loyihadagi barcha fayllarni to'plash
  const projectRoot = process.cwd();
  const allFiles = getAllFiles(projectRoot);
  console.log(`📂 Jami yuklanadigan fayllar: ${allFiles.length} ta`);

  // 4. Fayllarni GitHub Tree-ga qo'shish uchun Blob-larni yaratish
  const treeItems = [];

  for (let i = 0; i < allFiles.length; i++) {
    const fullPath = allFiles[i];
    const relativePath = path.relative(projectRoot, fullPath).replace(/\\/g, '/');
    const content = fs.readFileSync(fullPath);

    // Faylni Base64 blob sifatida yaratish
    const blobRes = await githubRequest(`/repos/${username}/${REPO_NAME}/git/blobs`, 'POST', {
      content: content.toString('base64'),
      encoding: 'base64'
    });

    if (blobRes.ok) {
      treeItems.push({
        path: relativePath,
        mode: '100644',
        type: 'blob',
        sha: blobRes.data.sha
      });
      process.stdout.write(`\rYuklanmoqda: [${i + 1}/${allFiles.length}] ${relativePath.padEnd(40).substring(0, 40)}`);
    } else {
      console.warn(`\n⚠️ ${relativePath} faylini yuklab bo'lmadi:`, blobRes.data.message);
    }
  }
  console.log('\n✅ Barcha fayllar tayyorlandi.');

  // 5. 'main' tarmog'ining oxirgi commit-ini olish
  let baseTreeSha = null;
  let parentCommitSha = null;

  const refRes = await githubRequest(`/repos/${username}/${REPO_NAME}/git/refs/heads/main`);
  if (refRes.ok) {
    parentCommitSha = refRes.data.object.sha;
    const commitRes = await githubRequest(`/repos/${username}/${REPO_NAME}/git/commits/${parentCommitSha}`);
    if (commitRes.ok) {
      baseTreeSha = commitRes.data.tree.sha;
    }
  }

  // 6. Yangi Tree yaratish
  console.log('🌳 Daraxt strukturasi (Git Tree) yaratilmoqda...');
  const newTreeRes = await githubRequest(`/repos/${username}/${REPO_NAME}/git/trees`, 'POST', {
    base_tree: baseTreeSha,
    tree: treeItems
  });

  if (!newTreeRes.ok) {
    console.error('❌ Tree yaratishda xato:', newTreeRes.data.message);
    process.exit(1);
  }

  // 7. Commit yaratish
  console.log('📝 Commit yaratilmoqda: "Initial commit: 50-Maktab official portal & AI"...');
  const commitPayload = {
    message: "Initial commit: 50-Maktab official portal & AI Assistant",
    tree: newTreeRes.data.sha,
    parents: parentCommitSha ? [parentCommitSha] : []
  };

  const newCommitRes = await githubRequest(`/repos/${username}/${REPO_NAME}/git/commits`, 'POST', commitPayload);
  if (!newCommitRes.ok) {
    console.error('❌ Commit yaratishda xato:', newCommitRes.data.message);
    process.exit(1);
  }

  // 8. Ref 'heads/main' ni yangilash
  console.log('🔗 Main tarmog\'i yangilanmoqda...');
  if (parentCommitSha) {
    await githubRequest(`/repos/${username}/${REPO_NAME}/git/refs/heads/main`, 'PATCH', {
      sha: newCommitRes.data.sha,
      force: true
    });
  } else {
    await githubRequest(`/repos/${username}/${REPO_NAME}/git/refs`, 'POST', {
      ref: 'refs/heads/main',
      sha: newCommitRes.data.sha
    });
  }

  console.log(`\n🎉 MUVOFFAQIYATLI YUKLANDI!`);
  console.log(`🌐 GitHub manzili: https://github.com/${username}/${REPO_NAME}`);
}

run().catch(err => {
  console.error('\n❌ Kutilmagan xatolik:', err);
});
