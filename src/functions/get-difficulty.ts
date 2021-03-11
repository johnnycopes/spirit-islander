import type { Difficulty } from "@models/game/difficulty";
import type { ISelection } from "@models/selection.interface";
import { getDynamicValue } from "@functions/utility/get-dynamic-value";

export function getDifficulty(
	difficulty: Difficulty | ((selection: ISelection) => Difficulty),
	selection: ISelection
): Difficulty {
	return getDynamicValue(difficulty, selection);
}
