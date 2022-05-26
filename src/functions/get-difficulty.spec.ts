import type { DifficultyOption } from "@models/game/difficulty";
import { getDifficulty } from "./get-difficulty";

describe("getDifficulty", () => {
	it("returns static difficulty value", () => {
		const mockItem: DifficultyOption<string> = {
			name: "Fake Item",
			difficulty: 4,
		};
		expect(getDifficulty(mockItem.difficulty, [])).toBe(4);
		expect(getDifficulty(mockItem.difficulty, ["Branch & Claw"])).toBe(4);
		expect(getDifficulty(mockItem.difficulty, ["Jagged Earth"])).toBe(4);
		expect(getDifficulty(mockItem.difficulty, ["Branch & Claw", "Jagged Earth"])).toBe(4);
		expect(getDifficulty(mockItem.difficulty, ["Promo Pack 1"])).toBe(4);
		expect(getDifficulty(mockItem.difficulty, ["Promo Pack 2"])).toBe(4);
		expect(getDifficulty(mockItem.difficulty, ["Promo Pack 1", "Promo Pack 2"])).toBe(4);
		expect(getDifficulty(mockItem.difficulty, [
			"Branch & Claw",
			"Jagged Earth",
			"Promo Pack 1",
			"Promo Pack 2"
		])).toBe(4);
	});

	it("returns dynamic difficulty value", () => {
		const mockItem: DifficultyOption<string> = {
			name: "Fake Item",
			difficulty: expansions => {
				if (expansions.length >= 2) {
					return 8;
				} else if (expansions.some(expansion => expansion === "Promo Pack 1")) {
					return 4;
				} else if (expansions.some(expansion => expansion === "Promo Pack 2")) {
					return 3;
				}
				return 1;
			},
		};
		expect(getDifficulty(mockItem.difficulty, [])).toBe(1);
		expect(getDifficulty(mockItem.difficulty, ["Branch & Claw"])).toBe(1);
		expect(getDifficulty(mockItem.difficulty, ["Jagged Earth"])).toBe(1);
		expect(getDifficulty(mockItem.difficulty, ["Branch & Claw", "Jagged Earth"])).toBe(8);
		expect(getDifficulty(mockItem.difficulty, ["Promo Pack 1"])).toBe(4);
		expect(getDifficulty(mockItem.difficulty, ["Promo Pack 2"])).toBe(3);
		expect(getDifficulty(mockItem.difficulty, ["Promo Pack 1", "Promo Pack 2"])).toBe(8);
		expect(getDifficulty(mockItem.difficulty, [
			"Branch & Claw",
			"Jagged Earth",
			"Promo Pack 1",
			"Promo Pack 2"
		])).toBe(8);
	});
});