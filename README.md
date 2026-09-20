# 🚀 Nexus AI — High-Performance AI Engineering Blog

A modern, high-speed, zero-bundle-overhead static blog built with **Astro 5**, **Tailwind CSS v4**, and **Content Collections**. Optimized for GitHub Pages deployment with dark mode support, client-side search, responsive typography, RSS 2.0 feeds, dynamic tag taxonomies, and SEO metadata.

---

## ✨ Features

- ⚡ **Astro 5 Static Site Generation (SSG):** Near-instant load times with zero JavaScript shipped by default.
- 🎨 **Tailwind CSS v4 & Typography:** Modern UI styling with seamless Light / Dark mode toggle and `@tailwindcss/typography` code highlighting.
- 📝 **Type-Safe Content Collections:** Markdown & MDX support powered by Zod schema validation (`src/content.config.ts`).
- 🔍 **Interactive Search Modal:** Instant client-side search triggered via `⌘K` or `Ctrl+K`.
- 📑 **Dynamic Table of Contents:** Sticky TOC with scroll spy tracking on desktop article views.
- 🏷️ **Topic Taxonomy & Dynamic Tag Pages:** Automatically generated tag clouds and filtered post grids (`/tags/[tag]`).
- 📡 **Full Syndication & SEO:** Automated RSS 2.0 (`/rss.xml`), sitemap generator (`sitemap-index.xml`), Schema.org structured data, and OpenGraph social cards.
- 🤖 **GitHub Actions CI/CD:** Ready-to-go automated workflow deploying directly to GitHub Pages on every push to `main`.

---

## 📁 Project Architecture

```text
ai-blog/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment to GitHub Pages
├── public/
│   └── favicon.svg             # Website icon
├── src/
│   ├── components/             # Reusable Astro UI components
│   │   ├── Header.astro        # Navbar with theme toggle & search trigger
│   │   ├── Footer.astro        # Social links & copyright
│   │   ├── PostCard.astro      # Grid article card with tags & date
│   │   ├── FeaturedPost.astro  # Spotlight hero card
│   │   ├── TagBadge.astro      # Styled topic pill
│   │   ├── TableOfContents.astro # Sticky interactive TOC
│   │   ├── SearchModal.astro   # Cmd+K search dialog
│   │   └── ThemeToggle.astro   # Dark/light theme switcher
│   ├── content/
│   │   └── blog/               # Markdown/MDX technical articles
│   │       ├── welcome-to-nexus-ai.md
│   │       ├── autonomous-agents-architecture-guide.md
│   │       ├── optimizing-rag-pipelines-token-efficiency.md
│   │       └── deep-dive-reasoning-models-inference-scaling.md
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Common page wrapper with SEO & head tags
│   │   └── BlogPostLayout.astro# Long-form article layout with TOC & meta
│   ├── pages/
│   │   ├── index.astro         # Homepage with hero & recent posts
│   │   ├── about.astro         # Mission & focus tracks
│   │   ├── 404.astro           # Custom 404 page
│   │   ├── blog/
│   │   │   ├── index.astro     # Archive of all articles with filters
│   │   │   └── [...slug].astro # Dynamic post renderer
│   │   ├── tags/
│   │   │   ├── index.astro     # Taxonomy list of all tags
│   │   │   └── [tag].astro     # Articles filtered by tag
│   │   ├── api/
│   │   │   └── search.json.ts  # Static search index generator
│   │   ├── robots.txt.ts       # Dynamic robots.txt
│   │   └── rss.xml.ts          # RSS 2.0 feed generator
│   ├── styles/
│   │   └── global.css          # Tailwind CSS v4 entrypoint & theme variables
│   └── content.config.ts       # Zod collection schema
├── astro.config.mjs            # Astro configuration with site & base path
├── package.json
└── tsconfig.json
```

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Visit `http://localhost:4321` in your browser.

### 3. Build Static Site
```bash
npm run build
```
The production assets are compiled to `./dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✍️ Writing a New Article

Create a `.md` or `.mdx` file inside `src/content/blog/`:

```markdown
---
title: "Your Article Title"
description: "A short 1-2 sentence overview of your research."
pubDate: 2026-09-20
category: "Artificial Intelligence"
tags: ["Agents", "Architecture", "Python"]
author: "Jasmin Nasit"
featured: false
draft: false
heroImage: "https://images.unsplash.com/photo-..."
---

## Introduction

Your markdown content here...
```

---

## 🚀 Deploying to GitHub Pages

### Automatic Deployment via GitHub Actions
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for Nexus AI blog"
   git branch -M main
   git remote add origin https://github.com/<your-username>/ai-blog.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Pushing changes to `main` will automatically trigger the `.github/workflows/deploy.yml` workflow and publish your site to `https://<your-username>.github.io/ai-blog/`.

---

## 📄 License
MIT
