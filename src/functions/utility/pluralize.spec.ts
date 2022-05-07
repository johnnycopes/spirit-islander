import { pluralize } from "./pluralize";

describe("pluralize", () => {
	it("pluralizes a noun with a standard plural form", () => {
		expect(pluralize(2, "tree")).toBe("trees");
		expect(pluralize(1, "tree")).toBe("tree");
		expect(pluralize(0, "tree")).toBe("trees");
		expect(pluralize(-1, "tree")).toBe("tree");
		expect(pluralize(-2, "tree")).toBe("trees");
	});

	it("pluralizes a noun with an irregular plural form", () => {
		expect(pluralize(2, "foot", "feet")).toBe("feet");
		expect(pluralize(1, "foot", "feet")).toBe("foot");
		expect(pluralize(0, "foot", "feet")).toBe("feet");
		expect(pluralize(-1, "foot", "feet")).toBe("foot");
		expect(pluralize(-2, "foot", "feet")).toBe("feet");
	});
});