import { defineConfig } from 'vite'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/toDo',
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@images': path.resolve(__dirname, 'src/public/images'),
      // Добавьте другие алиасы по мере необходимости
    },
  },
})

