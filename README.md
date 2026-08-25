# sutra-web

Landing page for SUTRA IDE — the AI-native IDE that builds with you.

Built with Next.js 15 (App Router). Vercel-ready: pull and run directly.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or import the repo at vercel.com/new — zero config needed.

## Windows installer

The downloadable `SUTRA-IDE-Setup.zip` lives in `public/downloads/` and is linked
from the hero button. It contains the full IDE source, a compiled launcher
(`SUTRA-IDE.exe`), and `SUTRA-Setup.bat` which installs dependencies, creates a
desktop shortcut, and launches the IDE at http://localhost:3001.

## Rebuild the installer zip

From the SUTRA IDE repo, stage a clean source tree (no node_modules, no sutra.db)
plus `SUTRA-IDE.exe` / `SUTRA-Setup.bat` / `README.txt` and compress it to
`website-next/public/downloads/SUTRA-IDE-Setup.zip`.
