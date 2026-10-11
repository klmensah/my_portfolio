# K.L.M. Portfolio

A small, static portfolio built with Next.js, TypeScript, and Tailwind CSS. It exports to plain HTML, CSS, and JavaScript and deploys automatically to GitHub Pages.

## Update the content

Edit `src/data/portfolio.ts`. The name, introduction, skills, GitHub profile, and projects all live in that one file.

## Add a blog post

Create a Markdown file in `content/blog`. Its filename becomes the URL slug, so `my-new-post.md` is published at `/blog/my-new-post/`.

Start every post with this front matter:

```md
---
title: "My new post"
category: "Web development"
excerpt: "A short description for the blog card and page metadata."
published: "2026-10-11"
repository: "https://github.com/klmensah/example"
accent: "blue"
---

Write the article in Markdown here.
```

Available accents are `amber`, `violet`, `blue`, `green`, `rose`, and `gold`. The blog listing and article page are generated automatically during the build.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:9002>.

## Verify the static site

```bash
npm run typecheck
npm run build
```

The production-ready static files are generated in `out/`.

## Publish on GitHub Pages

1. Push the repository to GitHub on the `main` branch.
2. Open **Settings → Pages** in the repository.
3. Set **Source** to **GitHub Actions**.
4. The included workflow builds and publishes the site automatically.

For a project repository, the site will be available at `https://USERNAME.github.io/REPOSITORY/`.
