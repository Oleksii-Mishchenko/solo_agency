import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/solo_agency/',
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./**/*.{ts,tsx}"',
      },
    }),
  ],
});
