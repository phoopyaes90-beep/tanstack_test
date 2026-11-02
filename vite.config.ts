import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite' // PDF ထဲပါသည့်အတိုင်း tanstackRouter ကို သုံးခြင်း
import tailwindcss from '@tailwindcss/vite'

import tsconfigPaths from 'vite-tsconfig-paths' // <- ဒါလေး ထည့်ပါ
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tanstackRouter({ 
      target: "react", 
      autoCodeSplitting: true 
    }),
    react(),
    tailwindcss(), // router plugin first!
  ],
})