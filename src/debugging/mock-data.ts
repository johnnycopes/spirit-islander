import { EXPANSIONS } from "@data/expansions";
import { MAPS } from "@data/maps";
import { SCENARIOS } from "@data/scenarios";
import { SPIRITS } from "@data/spirits";
import { createGameSetup } from "@functions/create-game-setup";
import { getValidCombos } from "@functions/get-valid-combos";
import type { IConfig } from "@models/config.interface";

export const MOCK_CONFIG: IConfig = {
	players: 4,
	expansions: EXPANSIONS,
	difficulty: 6,
	maps: MAPS.map(map => map.name),
	spirits: SPIRITS.map(spirit => spirit.name),
	adversaries: [
		"No Adversary",
		"Brandenburg-Prussia",
		"bp-0",
		"bp-1",
		"bp-2",
		"bp-3",
		"bp-4",
		"bp-5",
		"bp-6",
		"England",
		"en-0",
		"en-1",
		"en-2",
		"en-3",
		"en-4",
		"en-5",
		"en-6",
		"Sweden",
		"sw-0",
		"sw-1",
		"sw-2",
		"sw-3",
		"sw-4",
		"sw-5",
		"sw-6"
	],
	scenarios: SCENARIOS.map(scenario => scenario.name)
};

export const MOCK_VALID_COMBOS = getValidCombos(MOCK_CONFIG);
export const MOCK_GAME_SETUP = createGameSetup(MOCK_CONFIG, MOCK_VALID_COMBOS);