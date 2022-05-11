import { createArray } from "./create-array";

describe("createArray", () => {
	it("returns an empty array if arguments are incompatible", () => {
		expect(createArray(-3)).toStrictEqual([]);
		expect(createArray(2, 8)).toStrictEqual([]);
		expect(createArray(-6, -4)).toStrictEqual([]);
	});

	it("creates an array from 1 until end number, inclusive", () => {
		expect(createArray(1)).toStrictEqual([1]);
		expect(createArray(3)).toStrictEqual([1, 2, 3]);
		expect(createArray(7)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
	});

	it("generates an array from start number until end number, inclusive", () => {
		expect(createArray(8, 5)).toStrictEqual([5, 6, 7, 8]);
		expect(createArray(2, 0)).toStrictEqual([0, 1, 2]);
	})
});