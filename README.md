# K.L.M. Portfolio

A small, static portfolio built with Next.js, TypeScript, and Tailwind CSS. It exports to plain HTML, CSS, and JavaScript and deploys automatically to GitHub Pages.

## Update the content

Edit `src/data/portfolio.ts`. The name, introduction, skills, GitHub profile, and projects all live in that one file.

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
