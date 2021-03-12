import type { IInstructions } from "@models/instructions.interface";
import type { IConfig } from "@models/config.interface";
import type { ICombo } from "@models/combo.interface";
import { selectRandom } from "@functions/utility/select-random";

export function createInstructions(config: IConfig, validCombos: ICombo[]): IInstructions {
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