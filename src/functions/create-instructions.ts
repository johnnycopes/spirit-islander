import type { IScenario, ScenarioName } from "@models/game/scenarios";
import type { AdversaryLevelValue, IAdversaryLevel } from "@models/game/adversaries";
import type { IInstructions } from "@models/instructions.interface";
import type { ISelection } from "@models/selection.interface";
import { selectRandom } from "@functions/select-random";
import { getValidCombos } from "./get-valid-combos";

export function createInstructions(selection: ISelection): IInstructions {
	const { players, expansions, spirits, difficulty, maps, adversaries, scenarios }: ISelection = selection;
	const validCombos = getValidCombos(difficulty, maps, adversaries, scenarios);
	const selectedSpirits = selectRandom(spirits, players);
	const [selectedMap, selectedAdversary, selectedScenario] = selectRandom(validCombos)[0];

	return {
		players,
		difficulty,
		expansions,
		spirits: selectedSpirits,
		adversary: selectedAdversary,
		scenario: (selectedScenario as any)?.name,
		map: (selectedMap as any).name,
	}
}