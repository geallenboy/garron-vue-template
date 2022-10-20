
import { defineConfig,loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig(({ mode, command }) => {
  const {VITE_BASE_URL} = loadEnv(mode, process.cwd())
  return {
    base: VITE_BASE_URL,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      vue()
    ],
   
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'vue-router']
          }
        }
      }
    }
  }
});
