import type { ExpansionName } from "./expansions";
import type { IOption } from "./option";

export type Difficulty = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export interface IDifficultyOption extends IOption {
	difficulty: Difficulty | ((expansions: ExpansionName[]) => Difficulty);
}