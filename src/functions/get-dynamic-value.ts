export function getDynamicValue<TValue extends object | string | number | boolean | undefined | null, TArg>(
	value: TValue | ((arg: TArg) => TValue),
	arg: TArg
): TValue {
	return typeof value === "function" ? value(arg) : value;
}