export function pluralize(length: number, name: string, plural?: string): string {
	const pluralName = plural ?? name + "s";
	return length === 1 ? name : pluralName;
}
