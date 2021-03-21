import type { ICombo } from "@models/combo.interface";
import type { IConfig } from "@models/config.interface";
import type { IGameSetup } from "@models/game-setup.interface";
import { getBoardsByName } from "./get-boards-by-name";
import { getSpiritsByName } from "./get-spirits-by-name";
import { selectRandom } from "./utility/select-random";

export function createGameSetup(config: IConfig, validCombos: ICombo[]): IGameSetup {
	const randomSpiritNames = selectRandom(config.spiritNames, config.players);
	const selectedSpirits = getSpiritsByName(randomSpiritNames);
	const randomBoardNames = selectRandom(config.boardNames, config.players);
	const selectedBoards = getBoardsByName(randomBoardNames);
	const [selectedMap, selectedAdversary, selectedScenario] = selectRandom(validCombos)[0];

	return {
		players: config.players,
		difficulty: config.difficulty,
		expansions: config.expansions,
		spirits: selectedSpirits,
		boards: selectedBoards,
		map: selectedMap,
		scenario: selectedScenario,
		adversary: selectedAdversary,
	}
}