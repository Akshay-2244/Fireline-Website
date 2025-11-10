# 🔥 Fireline Website

A modern, responsive news website built with **React** + **Vite** and styled with **TailwindCSS**.
The site is a small news/demo application (content in Tamil) with components for header, footer, a top banner, news sections, and an article page. The project is configured for local development and production builds using Vite and includes a Netlify configuration for deployment.

---

## 📝 Project description

**Fireline Website** is a frontend-only news layout site demonstrating a performant, responsive layout built with React + Vite and styled using TailwindCSS. The project shows:

- A `Header` (desktop + mobile navigation)
- A `TopBanner` (dismissable)
- A main `NewsSection` showing big/medium/small article cards
- `MainAsideLayout` for layout with additional items
- A dedicated `ArticlePage` which reads article data and displays full article content
- `Footer` with social icons

Article content and images are stored locally in the `src/data` and `src/assets` directories. The UI text/content is primarily in Tamil.

---

## 📁 File structure

```
.
├── .gitignore
├── index.html
├── netlify.toml
├── package.json
├── postcss.config.js
├── public/
│   ├── Logo.png
│   └── _redirects
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── data/
│   │   └── articles.js
│   ├── assets/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── RedirectHeader.jsx
│   │   └── TopBanner.jsx
│   ├── sections/
│   │   ├── MainAsideLayout.jsx
│   │   └── NewsSection.jsx
│   └── pages/
│       └── ArticlePage.jsx
└── tailwind.config.js

```

> Note: `src/data/articles.js` exports an `ARTICLES` object used by `NewsSection` and `ArticlePage`. Images referenced there are imported from `src/assets/` (local images).

---

## 📦 Scripts

Use these commands in the project root:

- `npm install` — install dependencies
- `npm run dev` — start Vite dev server (default host `http://localhost:5173`)
- `npm run build` — build optimized production files into `dist/`
- `npm run preview` — preview the production build locally (Vite preview)
- `npm run lint` — run ESLint across the project

---

## 🧰 Tech stack & dependencies

Key dependencies:

- **react** (v19) & **react-dom**
- **vite** — fast dev server & bundler
- **tailwindcss** — utility-first CSS (with PostCSS)
- **postcss**, **autoprefixer**
- **react-icons** — icon set used in header/top banner/footer
- **eslint** and related plugins (ESLint config is present)

Files that configure tools:

- `tailwind.config.js` — Tailwind customization
- `postcss.config.js` — PostCSS + autoprefixer

---

## 🔧 Installation & local development

1. Clone repository:

   ```bash
   git clone https://github.com/Akshay-2244/Fireline-Website.git
   cd Fireline-Website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start dev server:

   ```bash
   npm run dev
   ```

   Open `http://localhost:5173` in your browser.

4. Build for production:

   ```bash
   npm run build
   ```

   Output will be in `dist/`.

5. Preview production build:

   ```bash
   npm run preview
   ```

---

## 🌐 Deployment (Netlify)

- A `netlify.toml` and `public/_redirects` exist in the repo. Netlify will detect the project as a Vite app. Typical Netlify configuration:

  - Build command: `npm run build`
  - Publish directory: `dist`

- If you require SPA redirect rules (client-side routing), the `_redirects` file is already present in `public/` to help route all client paths to `index.html`.

---

## 📚 About the data

- `src/data/articles.js` contains the article payload used by the site (title, subtitle, body paragraphs, tags, images, timestamps, related articles, etc.). Images referenced there are bundled from `src/assets/`.
- Because this app stores the selected article in `localStorage` when navigating from the homepage, direct navigation to `/article?id=` should still work due to fallback logic in `ArticlePage`.

---
