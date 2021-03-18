import type { ICombo } from "@models/combo.interface";
import type { IConfig } from "@models/config.interface";
import type { IGameSetup } from "@models/game-setup.interface";
import { getSpiritsByName } from "./get-spirits-by-name";
import { selectRandom } from "./utility/select-random";

export function createGameSetup(config: IConfig, validCombos: ICombo[]): IGameSetup {
	const randomSpiritNames = selectRandom(config.spiritNames, config.players);
	const selectedSpirits = getSpiritsByName(randomSpiritNames);
	const [selectedMap, selectedAdversary, selectedScenario] = selectRandom(validCombos)[0];

	return {
		players: config.players,
		difficulty: config.difficulty,
		expansions: config.expansions,
		spirits: selectedSpirits,
		map: selectedMap,
		scenario: selectedScenario,
		adversary: selectedAdversary,
	}
}