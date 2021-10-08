import { defineConfig } from 'vite'
import path from "path"
import { loadEnv } from "vite"
import vue from '@vitejs/plugin-vue'

export default defineConfig( ({mode})=> {
  Object.assign(process.env, loadEnv(mode, process.cwd()))
  
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '~': path.resolve(__dirname, './src'),
      },
    },
    }
  }
)
