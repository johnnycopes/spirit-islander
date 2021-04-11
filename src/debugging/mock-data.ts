import type { IConfig } from "@models/config.interface";
import type { AdversaryName, AdversaryLevelId } from "@models/game/adversaries";
import { ADVERSARIES } from "@data/adversaries";
import { BOARDS } from "@data/boards";
import { EXPANSIONS } from "@data/expansions";
import { MAPS } from "@data/maps";
import { SCENARIOS } from "@data/scenarios";
import { SPIRITS } from "@data/spirits";
import { createGameSetup } from "@functions/create-game-setup";
import { getValidCombos } from "@functions/get-valid-combos";

export const MOCK_CONFIG: IConfig = {
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

export const MOCK_VALID_COMBOS = getValidCombos(MOCK_CONFIG);
export const MOCK_GAME_SETUP = createGameSetup(MOCK_CONFIG, MOCK_VALID_COMBOS);