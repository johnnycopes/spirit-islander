export function getValuesRecursively<TItem, TValue>(
	item: TItem,
	getValue: (item: TItem) => TValue,
	getChildren: (item: TItem) => TItem[],
	values: TValue[] = [],
): TValue[] {
	const value = getValue(item);
	const children = getChildren(item);
	if (!children?.length) {
		return [value, ...values];
	} else {
		return [value, ...children.flatMap(child => getValuesRecursively(child, getValue, getChildren, values))];
	}
}