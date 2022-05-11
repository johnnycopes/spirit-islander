import { ComboAnalyzer } from "./combo-analyzer";

type MockDifficulty = 1 | 2 | 3;

interface MockOption {
	difficulty: MockDifficulty;
}

interface MockAdversary extends MockOption {
	name: string;
}

interface MockMap extends MockOption {
	type: string;
}

describe("ComboAnalyzer", () => {
	let analyzer: ComboAnalyzer<MockOption>;
	let adversaries: MockAdversary[];
	let maps: MockMap[];

	beforeEach(() => {
		analyzer = new ComboAnalyzer<MockOption>();
		adversaries = [
			{ name: "Novice", difficulty: 1 },
			{ name: "Enthusiast", difficulty: 2 },
			{ name: "Pro", difficulty: 3 },
		];
		maps = [
			{ type: "Open", difficulty: 1 },
			{ type: "Foggy", difficulty: 2 },
			{ type: "Volcanic", difficulty: 3 },
		];
	});

	it("returns all possible combos", () => {
		expect(analyzer.getPossibleCombos([adversaries, maps])).toStrictEqual([
      [ { name: "Novice", difficulty: 1 }, { type: "Open", difficulty: 1 } ],
      [ { name: "Novice", difficulty: 1 }, { type: "Foggy", difficulty: 2 } ],
      [ { name: "Novice", difficulty: 1 }, { type: "Volcanic", difficulty: 3 } ],
      [ { name: "Enthusiast", difficulty: 2 }, { type: "Open", difficulty: 1 } ],
      [ { name: "Enthusiast", difficulty: 2 }, { type: "Foggy", difficulty: 2 } ],
      [ { name: "Enthusiast", difficulty: 2 }, { type: "Volcanic", difficulty: 3 } ],
      [ { name: "Pro", difficulty: 3 }, { type: "Open", difficulty: 1 } ],
      [ { name: "Pro", difficulty: 3 }, { type: "Foggy", difficulty: 2 } ],
      [ { name: "Pro", difficulty: 3 }, { type: "Volcanic", difficulty: 3 } ]
    ]);
	});

	it("returns only combos that meet criteria", () => {
		function isEasy(options: MockOption[]): boolean {
			return getDifficulty(options) <= 2;
		}

		function isHard(options: MockOption[]): boolean {
			return getDifficulty(options) >= 5;
		}

		function getDifficulty(options: MockOption[]): number {
			return options.reduce((accum, { difficulty }) => accum + difficulty, 0);
		}

		expect(analyzer.getPossibleCombos([adversaries, maps],  isEasy)).toStrictEqual([
			[ { name: "Novice", difficulty: 1 }, { type: "Open", difficulty: 1 } ],
    ]);

		expect(analyzer.getPossibleCombos([adversaries, maps],  isHard)).toStrictEqual([
      [ { name: "Enthusiast", difficulty: 2 }, { type: "Volcanic", difficulty: 3 } ],
      [ { name: "Pro", difficulty: 3 }, { type: "Foggy", difficulty: 2 } ],
      [ { name: "Pro", difficulty: 3 }, { type: "Volcanic", difficulty: 3 } ]
    ]);
	});
});