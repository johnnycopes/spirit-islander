import type { Difficulty } from "@models/game/difficulty";
import type { ExpansionName } from "@models/game/expansions";
import { getDynamicValue } from "@functions/utility/get-dynamic-value";

export function getDifficulty(
	difficulty: Difficulty | ((expansions: ExpansionName[]) => Difficulty),
	expansions: ExpansionName[]
): Difficulty {
	return getDynamicValue(difficulty, expansions);
}
