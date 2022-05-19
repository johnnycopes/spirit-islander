import { SPIRITS } from "@data/spirits";
import type { Combo } from "@models/combo.interface";
import type { Config } from "@models/config.interface";
import type { GameSetup } from "@models/game-setup.interface";
import { selectRandom } from "./utility/select-random";
import { selectBoards } from "./select-boards";
import { getOptionsByName } from "./get-options";
import { getDifficulty } from "./get-difficulty";
import type { Difficulty } from "@models/game/difficulty";

export function createGameSetup(config: Config, validCombos: Combo[]): GameSetup {
	const {players, expansions, spiritNames, boardNames} = config;

	// Randomly choose a combination of a map, adversary, and scenario and determine the total difficulty
	const [selectedMap, selectedAdversaryLevel, selectedScenario] = selectRandom(validCombos)[0];
	const difficulty = getDifficulty(selectedMap.difficulty, expansions) +
		getDifficulty(selectedAdversaryLevel.difficulty, expansions) +
		getDifficulty(selectedScenario.difficulty, expansions) as Difficulty;

	// Randomly select spirits and boards
	const randomSpiritNames = selectRandom(spiritNames, players);
	const selectedSpirits = getOptionsByName(SPIRITS, randomSpiritNames);
	const selectedBoards = selectBoards(selectedMap.name, players, boardNames);

	return {
		players,
		difficulty,
		expansions,
		spirits: selectedSpirits,
		boards: selectedBoards,
		map: selectedMap,
		scenario: selectedScenario,
		adversaryLevel: selectedAdversaryLevel,
	}
}