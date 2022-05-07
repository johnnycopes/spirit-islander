export function pluralize(count: number, name: string, plural?: string): string {
	const pluralName = plural ?? name + "s";
	return Math.abs(count) === 1 ? name : pluralName;
}
