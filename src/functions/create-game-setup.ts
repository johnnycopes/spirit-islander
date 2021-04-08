import { SPIRITS } from "@data/spirits";
import type { ICombo } from "@models/combo.interface";
import type { IConfig } from "@models/config.interface";
import type { IGameSetup } from "@models/game-setup.interface";
import { selectRandom } from "./utility/select-random";
import { selectBoards } from "./select-boards";
import { selectSpirits, getSpirits } from "./select-spirits";

export function createGameSetup(config: IConfig, validCombos: ICombo[]): IGameSetup {
	const [selectedMap, selectedAdversaryLevel, selectedScenario] = selectRandom(validCombos)[0];
	const randomSpirits = selectSpirits(config.spiritOrAspectNames, config.players);
	const selectedSpirits = getSpirits(randomSpirits);
	const selectedBoards = selectBoards(selectedMap.name, config.players, config.boardNames);

	return {
		players: config.players,
		difficulty: config.difficulty,
		expansions: config.expansions,
		spirits: selectedSpirits,
		boards: selectedBoards,
		map: selectedMap,
		scenario: selectedScenario,
		adversaryLevel: selectedAdversaryLevel,
	}
}