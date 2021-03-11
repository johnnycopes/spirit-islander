import type { Difficulty } from "@models/game/difficulty";
import type { IGameConfig } from "@models/game/game-config";
import { getDynamicValue } from "@functions/utility/get-dynamic-valueic-value";

export function getDifficulty(
	difficulty: Difficulty | ((config: IGameConfig) => Difficulty),
	gameConfig: IGameConfig
): Difficulty {
	return getDynamicValue(difficulty, gameConfig);
}
