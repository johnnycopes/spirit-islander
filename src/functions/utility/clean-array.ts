export function cleanArray<T>(arr: T[]): T[] {
	return [...new Set(arr)];
}