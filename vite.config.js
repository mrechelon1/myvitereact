import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 base: "/deploy_react_app_github_pages_vercel",
  build: {
    // ... other build options
  },
})
