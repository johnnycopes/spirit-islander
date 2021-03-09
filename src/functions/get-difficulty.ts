import type { Difficulty } from "@models/game/difficulty";
import type { IGameConfig } from "@models/game/game-config";

export function getDifficulty(
	difficulty: Difficulty | ((config: IGameConfig) => Difficulty),
	gameConfig: IGameConfig
): Difficulty {
	return typeof difficulty === "function" ? difficulty(gameConfig) : difficulty;
}