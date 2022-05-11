import { snakeCase } from "./snake-case";

describe("snakeCase", () => {
	it("doesn't affect an empty string", () => {
		expect(snakeCase("")).toBe("");
	});

	it("transforms a lowercase string with spaces", () => {
		expect(snakeCase("unique object identifier")).toBe("unique-object-identifier");
	});

	it("transforms an uppercase string with spaces", () => {
		expect(snakeCase("UNIQUE OBJECT IDENTIFIER")).toBe("unique-object-identifier");
	});
});