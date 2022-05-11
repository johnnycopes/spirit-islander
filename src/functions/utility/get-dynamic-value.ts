export function getDynamicValue<Value extends object | string | number | boolean | undefined | null, Arg>(
	value: Value | ((arg: Arg) => Value),
	arg: Arg
): Value {
	return typeof value === "function" ? value(arg) : value;
}