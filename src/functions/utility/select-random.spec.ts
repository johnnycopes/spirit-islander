import { selectRandom } from "./select-random";

describe("selectRandom", () => {
	it("throws error if requested quantity exceeds options count", () => {
		expect(() => selectRandom([])).toThrow();
		expect(() => selectRandom([1, 2, 3], 4)).toThrow();
	});

	it("returns the requested quantity of options", () => {
		const options = [1, 2, 3, 4, 5];
		const selected = selectRandom(options, 2);
		expect(selected).toHaveLength(2);
	});

	it("returns unique options", () => {
		const options = [1, 2];
		const selected = selectRandom(options, 2);
		expect(selected[0]).not.toBe(selected[1]);
		expect(options.includes(selected[0])).toBe(true);
		expect(options.includes(selected[1])).toBe(true);
	});
});