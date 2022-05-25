import { getValidCombos } from "./get-valid-combos";
import type { Config } from "@models/config.interface";
import type { AdversaryName, AdversaryLevelId } from "@models/game/adversaries";
import { ADVERSARIES } from "@data/adversaries";
import { BOARDS } from "@data/boards";
import { EXPANSIONS } from "@data/expansions";
import { MAPS } from "@data/maps";
import { SCENARIOS } from "@data/scenarios";
import { SPIRITS } from "@data/spirits";

describe("getValidCombos", () => {
	it("returns possible combinations for lowest difficulty", () => {
		const mockConfig: Config = {
			expansions: EXPANSIONS,
			players: 1,
			difficultyRange: [0, 0],
			spiritNames: SPIRITS.map(spirit => spirit.name),
			mapNames: MAPS.map(map => map.name),
			boardNames: BOARDS.map(board => board.name),
			scenarioNames: SCENARIOS.map(scenario => scenario.name),
			adversaryNamesAndIds: ADVERSARIES.reduce((model, adversary) => {
				model.push(adversary.name);
				adversary.levels.forEach(level => model.push(level.id));
				return model;
			}, [] as (AdversaryName | AdversaryLevelId)[]),
		};
		expect(getValidCombos(mockConfig)).toStrictEqual([
			[
				{ "name": "Balanced", "difficulty": 0 },
				{ "id": "none", "name": "N/A", "difficulty": 0 },
				{ "name": "No Scenario", "difficulty": 0 }
			],
			[
				{ "name": "Balanced", "difficulty": 0 },
				{ "id": "none", "name": "N/A", "difficulty": 0 },
				{ "name": "Blitz", "difficulty": 0 }
			],
			[
				{ "name": "Balanced", "difficulty": 0 },
				{ "id": "none", "name": "N/A", "difficulty": 0 },
				{ "name": "Guard the Isle's Heart", "difficulty": 0 }
			],
			[
				{ "name": "Balanced", "difficulty": 0 },
				{ "id": "none", "name": "N/A", "difficulty": 0 },
				{"name": "Second Wave","difficulty": 0,"expansion": "Branch & Claw"
				}
			],
			[
				{ "name": "Balanced", "difficulty": 0 },
				{ "id": "none", "name": "N/A", "difficulty": 0 },
				{ "name": "A Diversity of Spirits", "difficulty": 0, "expansion": "Promo Pack 2" }
			],
			[
				{ "name": "Balanced", "difficulty": 0 },
				{ "id": "none", "name": "N/A", "difficulty": 0 },
				{ "name": "Elemental Invocation", "difficulty": 0, "expansion": "Jagged Earth" }
			]
		]);
	});

	it("returns all possible combinations", () => {
		const mockConfig: Config = {
			expansions: EXPANSIONS,
			players: 1,
			difficultyRange: [0, 11],
			spiritNames: SPIRITS.map(spirit => spirit.name),
			mapNames: MAPS.map(map => map.name),
			boardNames: BOARDS.map(board => board.name),
			scenarioNames: SCENARIOS.map(scenario => scenario.name),
			adversaryNamesAndIds: ADVERSARIES.reduce((model, adversary) => {
				model.push(adversary.name);
				adversary.levels.forEach(level => model.push(level.id));
				return model;
			}, [] as (AdversaryName | AdversaryLevelId)[]),
		};
		expect(getValidCombos(mockConfig)).toHaveLength(1215);
	});
});