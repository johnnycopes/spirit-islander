export function cleanArray<T>(...arrays: T[][]): T[] {
  const elements = [];

  for (const arr of arrays) {
    elements.push(...arr);
  }

  return Array.from(new Set(elements));
}