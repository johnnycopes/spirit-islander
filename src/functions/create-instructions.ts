import type { IInstructions } from "@models/instructions.interface";
import type { IConfig } from "@models/config.interface";
import { selectRandom } from "@functions/utility/select-random";
import { getValidCombos } from "@functions/get-valid-combos";

export function createInstructions(config: IConfig): IInstructions {
	const validCombos = getValidCombos(config);
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