import type { Difficulty } from "@models/game/difficulty";
import type { IConfig } from "@models/config.interface";
import { getDynamicValue } from "@functions/utility/get-dynamic-value";

export function getDifficulty(
	difficulty: Difficulty | ((config: IConfig) => Difficulty),
	config: IConfig
): Difficulty {
	return getDynamicValue(difficulty, config);
}
