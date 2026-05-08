import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  // Preview serves ./dist — run `npm run build` first.
  // Port: set PORT in ecosystem.config.cjs (PM2); local `npm run preview` defaults via fallback below.
  preview: {
    host: true,
    port: Number(process.env.PORT) || 4051,
    strictPort: true,
    // Required when accessed via real domain through Nginx (Host header check).
    allowedHosts: ['hreedrak.com', 'www.hreedrak.com'],
  },
})
