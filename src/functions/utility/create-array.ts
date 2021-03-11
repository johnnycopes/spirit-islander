export function createArray(end: number, start: number = 1): number[] {
	const arr = [];
	for (let i = start; i <= end; i++) {
		arr.push(i);
	}
	return arr;
}