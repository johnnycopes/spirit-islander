import { getDynamicValue } from "./get-dynamic-value";

describe("getDynamicValue", () => {
	it("returns value directly if not a function", () => {
		expect(getDynamicValue(1, [])).toBe(1);
		expect(getDynamicValue("1", [])).toBe("1");
		expect(getDynamicValue([3, 4], [])).toStrictEqual([3, 4]);
		expect(getDynamicValue({ location: "Brooklyn" }, [])).toStrictEqual({ location: "Brooklyn" });
		expect(getDynamicValue(null, [])).toBe(null);
		expect(getDynamicValue(undefined, [])).toBe(undefined);
	});

	it("returns result of value calling arg if value is a function", () => {
		expect(getDynamicValue(Array.isArray, "hello")).toBe(false);
		expect(getDynamicValue((arr) => Math.max(...arr), [6, 3, 4])).toBe(6);
	});
});