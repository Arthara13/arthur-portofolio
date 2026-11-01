// Prefix public/ assets with Vite's deployed base URL.
// Works on both localhost and GitHub Pages subpaths.
export function assetUrl(path) {
  if (!path || /^(https?:|data:|blob:)/.test(path)) return path
  return `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`
}
