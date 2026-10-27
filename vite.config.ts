import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import handler from './api/chat';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'api-chat-dev-server',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url?.startsWith('/api/chat')) {
            try {
              await handler(req as any, res as any);
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message || 'Server error' }));
            }
            return;
          }
          next();
        });
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
});
