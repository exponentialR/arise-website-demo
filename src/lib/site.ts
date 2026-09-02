const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function sitePath(path = '/') {
  const normalised = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalised}`;
}
