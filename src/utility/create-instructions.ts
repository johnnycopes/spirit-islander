import type { IInstructions } from "@models/instructions.interface";
import type { ISelection } from "@models/selection.interface";
import { selectRandom } from "@utility/select-random";

export function createInstructions(selection: ISelection): IInstructions {
	const { players, difficulty, spirits, adversaries, scenarios, maps }: ISelection = selection;
	return {
		players,
		difficulty,
		spirits: selectRandom(spirits, players),
		adversary: adversaries[0],
		scenario: scenarios[0],
		map: maps[0],
	}
}