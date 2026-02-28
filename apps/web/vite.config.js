import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/email': 'http://localhost:3001',
      '/send-email': 'http://localhost:3001',
    },
  },
});
