// Vercel Serverless Function: /api/chat.js
// Compatible with Node.js 18+ and Vercel Serverless Functions

const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 20;

function isRateLimited(ip) {
  const now = Date.now();
  const clientData = rateLimitMap.get(ip);

  if (!clientData || now > clientData.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (clientData.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  clientData.count += 1;
  return false;
}

const SYSTEM_INSTRUCTION = `You are "50 Maktab AI" — the official intelligent assistant of School No. 50 (50-umumiy o'rta ta'lim maktabi), located in Andijan Region, Uzbekistan.

School Details:
- Name: 50-Maktab (Andijon viloyati 50-umumiy o'rta ta'lim maktabi)
- Location: Ma'rifat street, 50, Andijan District, Andijan Region, Uzbekistan
- Contact: Phone: +998 (74) 220-50-50, Email: info@50maktab.uz
- Shifts: 1st shift (08:00 - 13:15), 2nd shift (13:30 - 18:00)
- Core Focus: STEM (Science, Technology, Engineering, Math), Robotics & Coding, Foreign Languages (English, German), Olympiad preparation.
- Facilities: Modern chemistry/physics laboratories, robotics studios, multimedia smart classrooms, sports gym, cafeteria, updated library.
- Admissions: Registration via my.maktab.uz portal starting June 20th. Required: birth certificate, medical form 086-U, parents' passports, 4 photos (3x4).

Your Persona & Rules:
1. Always introduce yourself politely as "50 Maktab AI".
2. Match the language used by the user:
   - If the user writes in Uzbek, reply in natural, polite Uzbek (O'zbek tili).
   - If the user writes in Russian, reply in polite Russian.
   - If the user writes in English, reply in helpful English.
3. Help students, parents, and teachers with school questions: homework guidance, lesson explanations, schedule info, school rules, club information.
4. Transparency: State that you provide general educational and school guidance and do not have access to private confidential student grade books or official administrative databases.
5. Format your answers neatly using Markdown (bullet points, bold text for key points, clear sections).`;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method Not Allowed. Please use POST.' }));
    return;
  }

  const forwarded = req.headers['x-forwarded-for'];
  const clientIp = typeof forwarded === 'string' ? forwarded.split(',')[0].trim() : (req.socket?.remoteAddress || 'anonymous');
  if (isRateLimited(clientIp)) {
    res.statusCode = 429;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Too many requests. Please wait a minute before sending another message.' }));
    return;
  }

  let body = {};
  try {
    if (req.body && typeof req.body === 'object') {
      body = req.body;
    } else {
      const buffers = [];
      for await (const chunk of req) {
        buffers.push(chunk);
      }
      const raw = Buffer.concat(buffers).toString('utf8');
      body = raw ? JSON.parse(raw) : {};
    }
  } catch (err) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
    return;
  }

  const userMessage = body.message?.trim();
  if (!userMessage) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Message content is required' }));
    return;
  }

  if (userMessage.length > 3000) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Message exceeds maximum length of 3000 characters.' }));
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'your_gemini_api_key_here') {
    res.statusCode = 503;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      error: 'GEMINI_API_KEY is not configured on the server. Please configure GEMINI_API_KEY in your environment variables.',
      missingKey: true
    }));
    return;
  }

  const contents = [];

  if (Array.isArray(body.history)) {
    const safeHistory = body.history.slice(-10);
    for (const h of safeHistory) {
      if (h.content && (h.role === 'user' || h.role === 'assistant')) {
        contents.push({
          role: h.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: h.content }]
        });
      }
    }
  }

  contents.push({
    role: 'user',
    parts: [{ text: userMessage }]
  });

  const geminiPayload = {
    system_instruction: {
      parts: [{ text: SYSTEM_INSTRUCTION }]
    },
    contents,
    generationConfig: {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 2048,
    }
  };

  const models = ['gemini-2.5-flash', 'gemini-1.5-flash'];
  let lastError = '';

  for (const model of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(geminiPayload),
        signal: AbortSignal.timeout(20000)
      });

      const data = await response.json();

      if (!response.ok) {
        lastError = data?.error?.message || `API error (${response.status})`;
        if (response.status === 404) continue;
        break;
      }

      const candidate = data.candidates?.[0];
      const replyText = candidate?.content?.parts?.[0]?.text;

      if (replyText) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          response: replyText,
          model,
          timestamp: new Date().toISOString()
        }));
        return;
      } else {
        lastError = 'No text generated in response';
      }
    } catch (err) {
      lastError = err.message || 'Network error reaching Gemini API';
    }
  }

  res.statusCode = 502;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    error: lastError || 'Failed to communicate with AI provider. Please check API key and network connectivity.',
    details: lastError
  }));
}
