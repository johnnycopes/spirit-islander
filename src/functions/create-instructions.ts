import type { AdversaryLevelValue } from "@models/game/adversaries";
import type { IInstructions } from "@models/instructions.interface";
import type { ISelection } from "@models/selection.interface";
import { selectRandom } from "@functions/select-random";

export function createInstructions(selection: ISelection): IInstructions {
	const { players, difficulty, expansions, spirits, adversaries, scenarios, maps }: ISelection = selection;
	const map = selectRandom(maps)[0];
	const adversary = adversaries.length ?
		{
			name: selectRandom(adversaries)[0],
			level: 0 as AdversaryLevelValue,
		}
		: undefined;
	const scenario = scenarios.length ?
		selectRandom(scenarios)[0]
		: undefined;

	return {
		players,
		difficulty,
		expansions,
		spirits: selectRandom(spirits, players),
		adversary,
		scenario,
		map,
	}
}