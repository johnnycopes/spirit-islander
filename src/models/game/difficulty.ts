import type { IGameConfig } from "./game-config";

export type Difficulty = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export interface IDifficultyOption {
	difficulty: Difficulty | ((config: IGameConfig) => Difficulty);
}