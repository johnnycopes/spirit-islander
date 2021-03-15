export function getItemsRecursively<T>(
	item: T,
	getChildren: (item: T) => T[],
): T[] {
	const children = getChildren(item);
	if (!children?.length) {
		return [item];
	} else {
		return [item, ...children.flatMap(child => getItemsRecursively(child, getChildren))];
	}
}