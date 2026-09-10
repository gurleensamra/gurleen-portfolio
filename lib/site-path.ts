// Set by the GitLab build script from CI_PAGES_URL, including /project-name.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export function sitePath(path: string) {
  return path.startsWith('/') && !path.startsWith('//') ? `${basePath}${path}` : path;
}
