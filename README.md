# Nubank.banc

Static clone of the Nubank homepage (homepage only). Use this repo for development and optional deploy to Vercel/Netlify. This project was created per user request and contains a static HTML/CSS/JS implementation of the homepage layout and styles.

How to run locally

1. Clone the repo:

   git clone https://github.com/josefrodrigues503-source/Nubank.banc.git
2. Open index.html in your browser, or serve with a simple static server:

   npx serve .

Prepare for Vercel (automatic steps)

1. Go to https://vercel.com and sign in.
2. If this is the first time, click "Continue with GitHub" and authorize Vercel to access your GitHub account. Make sure Vercel has access to the repository josefrodrigues503-source/Nubank.banc (you can grant access to all repositories or only selected repositories).
3. Click "New Project" → "Import Git Repository" and choose the repo `josefrodrigues503-source/Nubank.banc`.
4. Framework Preset: select "Other" or "Static Site".
5. Build Command: leave blank.
6. Output Directory: `/` (leave blank or use `/`).
7. Click "Deploy".

After deploy, Vercel will provide a public URL (e.g. https://nubank-banc.vercel.app). You can configure a custom domain in Vercel dashboard -> Domains.

Notes

- The repository already includes a `vercel.json` that tells Vercel to treat this project as a static site and route all requests to `index.html` (single-page behavior). No additional build steps are required.
- If you want me to finish the import into your Vercel account, authorize me to access your Vercel account or follow the steps above and eu te guio em tempo real.

