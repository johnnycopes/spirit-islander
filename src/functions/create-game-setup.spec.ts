import { ADVERSARIES } from "@data/adversaries";
import { BOARDS } from "@data/boards";
import { EXPANSIONS } from "@data/expansions";
import { MAPS } from "@data/maps";
import { SCENARIOS } from "@data/scenarios";
import { SPIRITS } from "@data/spirits";
import type { Config } from "@models/config.interface";
import type { AdversaryName, AdversaryLevelId } from "@models/game/adversaries";
import { createGameSetup } from "./create-game-setup";
import { getValidCombos } from "./get-valid-combos";

describe("createGameSetup", () => {
	it("returns a randomly-generated game setup", () => {
		const mockConfig: Config = {
			expansions: EXPANSIONS,
			players: 4,
			difficultyRange: [5, 8],
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
		const { boards, spirits, expansions, difficulty } = createGameSetup(mockConfig, getValidCombos(mockConfig));

		expect(boards).toHaveLength(4);
		expect(spirits).toHaveLength(4);
		expect(expansions).toStrictEqual(["Branch & Claw", "Horizons of Spirit Island", "Jagged Earth", "Promo Pack 1", "Promo Pack 2"]);
		expect(difficulty).toBeGreaterThanOrEqual(5);
		expect(difficulty).toBeLessThanOrEqual(8);
	});
});