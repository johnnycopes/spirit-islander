import type { IGameSetup } from "@models/game-setup.interface";
import type { IConfig } from "@models/config.interface";
import type { ICombo } from "@models/combo.interface";
import { selectRandom } from "@functions/utility/select-random";

export function createGameSetup(config: IConfig, validCombos: ICombo[]): IGameSetup {
	const selectedSpirits = selectRandom(config.spirits, config.players);
	const [selectedMap, selectedAdversary, selectedScenario] = selectRandom(validCombos)[0];

	return {
		players: config.players,
		difficulty: config.difficulty,
		expansions: config.expansions,
		spirits: selectedSpirits,
		adversary: selectedAdversary,
		scenario: selectedScenario.name,
		map: selectedMap.name,
	}
}