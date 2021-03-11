import type { IInstructions } from "@models/instructions.interface";
import type { ISelection } from "@models/selection.interface";
import { selectRandom } from "@functions/utility/select-random";
import { getValidCombos } from "@functions/get-valid-combos";

export function createInstructions(selection: ISelection): IInstructions {
	const validCombos = getValidCombos(selection);
	const selectedSpirits = selectRandom(selection.spirits, selection.players);
	const [selectedMap, selectedAdversary, selectedScenario] = selectRandom(validCombos)[0];

	return {
		players: selection.players,
		difficulty: selection.difficulty,
		expansions: selection.expansions,
		spirits: selectedSpirits,
		adversary: selectedAdversary,
		scenario: selectedScenario.name,
		map: selectedMap.name,
	}
}