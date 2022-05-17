import { getAdversaryById } from "./get-adversary-by-id";

describe("getAdversaryById", () => {
	it("returns 'No Adversary'", () => {
		expect(getAdversaryById("none")).toBe("No Adversary");
	});

	it("returns 'Brandenburg-Prussia'", () => {
		expect(getAdversaryById("bp-0")).toBe("Brandenburg-Prussia");
		expect(getAdversaryById("bp-1")).toBe("Brandenburg-Prussia");
		expect(getAdversaryById("bp-2")).toBe("Brandenburg-Prussia");
		expect(getAdversaryById("bp-3")).toBe("Brandenburg-Prussia");
		expect(getAdversaryById("bp-4")).toBe("Brandenburg-Prussia");
		expect(getAdversaryById("bp-5")).toBe("Brandenburg-Prussia");
		expect(getAdversaryById("bp-6")).toBe("Brandenburg-Prussia");
	});

	it("returns 'England'", () => {
		expect(getAdversaryById("en-0")).toBe("England");
		expect(getAdversaryById("en-1")).toBe("England");
		expect(getAdversaryById("en-2")).toBe("England");
		expect(getAdversaryById("en-3")).toBe("England");
		expect(getAdversaryById("en-4")).toBe("England");
		expect(getAdversaryById("en-5")).toBe("England");
		expect(getAdversaryById("en-6")).toBe("England");
	});

	it("returns 'France'", () => {
		expect(getAdversaryById("fr-0")).toBe("France");
		expect(getAdversaryById("fr-1")).toBe("France");
		expect(getAdversaryById("fr-2")).toBe("France");
		expect(getAdversaryById("fr-3")).toBe("France");
		expect(getAdversaryById("fr-4")).toBe("France");
		expect(getAdversaryById("fr-5")).toBe("France");
		expect(getAdversaryById("fr-6")).toBe("France");
	});

	it("returns 'Habsburg Monarchy'", () => {
		expect(getAdversaryById("hm-0")).toBe("Habsburg Monarchy");
		expect(getAdversaryById("hm-1")).toBe("Habsburg Monarchy");
		expect(getAdversaryById("hm-2")).toBe("Habsburg Monarchy");
		expect(getAdversaryById("hm-3")).toBe("Habsburg Monarchy");
		expect(getAdversaryById("hm-4")).toBe("Habsburg Monarchy");
		expect(getAdversaryById("hm-5")).toBe("Habsburg Monarchy");
		expect(getAdversaryById("hm-6")).toBe("Habsburg Monarchy");
	});

	it("returns 'Russia'", () => {
		expect(getAdversaryById("ru-0")).toBe("Russia");
		expect(getAdversaryById("ru-1")).toBe("Russia");
		expect(getAdversaryById("ru-2")).toBe("Russia");
		expect(getAdversaryById("ru-3")).toBe("Russia");
		expect(getAdversaryById("ru-4")).toBe("Russia");
		expect(getAdversaryById("ru-5")).toBe("Russia");
		expect(getAdversaryById("ru-6")).toBe("Russia");
	});

	it("returns 'Scotland'", () => {
		expect(getAdversaryById("sc-0")).toBe("Scotland");
		expect(getAdversaryById("sc-1")).toBe("Scotland");
		expect(getAdversaryById("sc-2")).toBe("Scotland");
		expect(getAdversaryById("sc-3")).toBe("Scotland");
		expect(getAdversaryById("sc-4")).toBe("Scotland");
		expect(getAdversaryById("sc-5")).toBe("Scotland");
		expect(getAdversaryById("sc-6")).toBe("Scotland");
	});

	it("returns 'Sweden'", () => {
		expect(getAdversaryById("sw-0")).toBe("Sweden");
		expect(getAdversaryById("sw-1")).toBe("Sweden");
		expect(getAdversaryById("sw-2")).toBe("Sweden");
		expect(getAdversaryById("sw-3")).toBe("Sweden");
		expect(getAdversaryById("sw-4")).toBe("Sweden");
		expect(getAdversaryById("sw-5")).toBe("Sweden");
		expect(getAdversaryById("sw-6")).toBe("Sweden");
	});
});