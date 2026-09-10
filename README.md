# Gurleen’s portfolio

This is the editable source for the current portfolio, with native project and About pages and repaired navigation. It runs locally and exports static files for GitLab Pages. You do not need a Sites account, Cloudflare Worker, API key, or backend to run it.

**Design status:** this is the current pastel desktop prototype. It does not yet recreate the illustrated San Francisco / Seattle mockup. That visual reference is saved locally in `work/reference/original-mockup.png`; the next design direction is in `DESIGN-NEXT.md`.

## Start editing

Use Node 22.13 or newer (Node 22 is specified in `.nvmrc`). Dependencies are already installed in this working folder. On a fresh checkout, run `npm ci` first.

```sh
cd /Users/gurleen/Documents/ChatGPT/website
npm run dev
```

Open the Local URL shown in the terminal. Edits refresh the preview automatically. Stop with Control-C.

## Where to edit

| File | What it controls |
|---|---|
| `app/page.tsx` | Homepage, copy, cat interaction, theme toggle |
| `app/globals.css` | Colors, typography, layout, animation, responsive styles |
| `app/about/page.tsx` | About page |
| `lib/projects.ts` | Project story content |
| `app/projects/[slug]/page.tsx` | Shared project page layout and SWE gallery |
| `components/portfolio-frame.tsx` | Project/About navigation and footer |
| `public/images/` | Your existing portrait and project artwork |
| `components/site-link.tsx` | Native links with GitLab subfolder support |
| `components/site-image.tsx` | Image paths with GitLab subfolder support |

The home navigation and detail-page navigation are currently separate components; update both when changing labels. All project assets are local. Résumé, LinkedIn, and email remain external destinations.

## Build and preview

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

Static output is `dist/client/`. The local production preview is at `http://127.0.0.1:4173/`. Only upload `dist/client` as the hosted website, never the whole source or `dist/server`.

## Put the code on GitLab

1. Create an **empty** GitLab project. Don’t initialize it with a README, since this folder already has one.
2. Copy its Git URL. In this folder, run:

```sh
git remote add origin YOUR_GITLAB_REPOSITORY_URL
git push -u origin main
```

Replace `YOUR_GITLAB_REPOSITORY_URL` with the actual SSH or HTTPS URL shown by GitLab. No repository URL or account was assumed. Use GitLab’s normal authentication; never put a password or access token in source files.

The repository has a `.gitlab-ci.yml` that installs dependencies, checks the app, creates a static export, and publishes `dist/client` on pushes to the default branch. It uses current GitLab Pages syntax (GitLab 17.10+). On a self-managed older GitLab instance, adapt the Pages job to the administrator’s supported version.

After the pipeline succeeds, find the website at **Deploy → Pages**. Choose the Pages access level you want in GitLab. I have not created a GitLab project, pushed to GitLab, or made this site public.

### GitLab URL handling

The build reads `CI_PAGES_URL`, so it supports both unique Pages domains and a traditional URL such as `https://username.gitlab.io/portfolio`. Internal page links, images, CSS and JavaScript use the correct prefix.

For a custom domain rooted at `/`, set CI/CD variable `NEXT_PUBLIC_BASE_PATH` to an empty string and rebuild if your Pages URL still contains the project prefix. Do not include a trailing slash in a nonempty override.

To simulate a subfolder locally:

```sh
CI_PAGES_URL=https://example.gitlab.io/portfolio npm run build:gitlab
NEXT_PUBLIC_BASE_PATH=/portfolio npm run preview
```

Open `http://127.0.0.1:4173/portfolio/`.

Official documentation:
- https://docs.gitlab.com/user/project/pages/introduction/#customize-the-default-folder
- https://docs.gitlab.com/user/project/pages/getting_started_part_one/

## Validation and limitations

- Static exports build all five content pages and a 404 page.
- App lint and TypeScript checks pass.
- The GitLab subfolder build is checked for correctly prefixed page and asset URLs. Browser checks passed for the theme toggle, cat interaction, About navigation, and theme persistence across pages.
- The source uses native anchors because the original framework’s client navigation threw errors after deployment.
- The existing pinned starter dependency tree reports npm audit advisories. Dependencies were preserved instead of force-upgraded; review them before a public launch.
- The generated UI library is retained but most of it is unused. App lint targets the code used by this portfolio; some unused starter components have existing lint issues.
- Content comes from your public portfolio. Confirm current biography and résumé details before publishing publicly.

`.openai/hosting.json` is optional metadata linking the source to the existing private preview. GitLab does not need it and it contains no credentials.
