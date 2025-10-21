import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/electrocatalyst-app/', // Change this to your repo name, or '/' for root domain
})
