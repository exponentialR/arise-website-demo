export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function refIds(refs: Array<{ id: string }> | undefined) {
  return new Set((refs ?? []).map((reference) => reference.id));
}

export function uniqueById<T extends { id: string }>(entries: T[]) {
  return [...new Map(entries.map((entry) => [entry.id, entry])).values()];
}
