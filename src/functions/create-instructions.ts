import type { IInstructions } from "@models/instructions.interface";
import type { ISelection } from "@models/selection.interface";
import { selectRandom } from "@functions/utility/select-randomt-random";
import { getValidCombos } from "@functions/get-valid-combos";

export function createInstructions(selection: ISelection): IInstructions {
	const { players, expansions, spirits, difficulty, maps, adversaries, scenarios }: ISelection = selection;
	const validCombos = getValidCombos({ players, expansions, difficulty }, maps, adversaries, scenarios);
	const selectedSpirits = selectRandom(spirits, players);
	const [selectedMap, selectedAdversary, selectedScenario] = selectRandom(validCombos)[0];

	return {
		players,
		difficulty,
		expansions,
		spirits: selectedSpirits,
		adversary: selectedAdversary,
		scenario: selectedScenario.name,
		map: selectedMap.name,
	}
}