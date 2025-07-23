// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',         // ← include root HTML
    './src/**/*.{js,ts,jsx,tsx,html}', // ← include anything in src/
  ],
  theme: { extend: {} },
  plugins: [],
}

export default config
