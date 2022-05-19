export function getDynamicValue<T extends object | string | number | boolean | undefined | null, Arg>(
	value: T | ((arg: Arg) => T),
	arg: Arg
): T {
	return typeof value === "function" ? value(arg) as T : value;
}