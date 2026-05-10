const path = require('path')

/**
 * PM2 ecosystem — run after `npm ci` / `npm install` and `npm run build`.
 *
 * `cwd` is the folder that contains this file (project root). Same repo works on your Mac
 * and on the server (e.g. /root/hreedrak) without editing paths.
 *
 * Nginx upstream must match PORT / vite preview (see vite.config.js).
 * Runs Vite directly so PORT and cwd are reliable under PM2.
 */
module.exports = {
  apps: [
    {
      name: 'hreedrak',
      cwd: path.resolve(__dirname),
      script: './node_modules/vite/bin/vite.js',
      args: 'preview',
      interpreter: 'node',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: '4051',
      },
    },
  ],
}
