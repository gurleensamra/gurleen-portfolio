import { spawnSync } from 'node:child_process';
import { existsSync, renameSync } from 'node:fs';
import { resolve } from 'node:path';
// CI_PAGES_URL is GitLab's actual Pages URL, handling both unique domains and
// traditional namespace.gitlab.io/project-name sites. An explicit override wins.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.CI_PAGES_URL ? new URL(process.env.CI_PAGES_URL).pathname.replace(/\/$/, '') : '');
if (basePath && (!basePath.startsWith('/') || basePath.endsWith('/'))) {
  throw new Error('NEXT_PUBLIC_BASE_PATH must be empty or /project-name without a trailing slash.');
}
const result = spawnSync('npm', ['run', 'build'], {
  stdio: 'inherit',
  env: { ...process.env, NEXT_PUBLIC_BASE_PATH: basePath },
});
if (result.status !== 0) process.exit(result.status ?? 1);
// vinext places assets under assetPrefix on disk. GitLab mounts the entire
// published directory at that URL prefix, so keep the assets at its root.
if (basePath) {
  const nested = resolve('dist/client' + basePath, '_next');
  const output = resolve('dist/client');
  if (!nested.startsWith(output + '/')) throw new Error('Invalid Pages path');
  if (existsSync(nested)) renameSync(nested, resolve(output, '_next'));
}

