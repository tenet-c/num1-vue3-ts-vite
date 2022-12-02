import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginEslint from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginEslint({
      cache: false,
      fix: true
    }),
    vueJsx({})
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  // 全局css变量预处理
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  }
})
