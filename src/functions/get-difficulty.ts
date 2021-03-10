import type { Difficulty } from "@models/game/difficulty";
import type { IGameConfig } from "@models/game/game-config";
import { getDynamicValue } from "@functions/get-dynamic-value";

export function getDifficulty(
	difficulty: Difficulty | ((config: IGameConfig) => Difficulty),
	gameConfig: IGameConfig
): Difficulty {
	return getDynamicValue(difficulty, gameConfig);
}
