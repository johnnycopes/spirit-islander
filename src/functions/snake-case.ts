export function snakeCase(str: string): string {
	return str
		.split(" ")
		.map(strEl => strEl.toLowerCase())
		.join("-");
}