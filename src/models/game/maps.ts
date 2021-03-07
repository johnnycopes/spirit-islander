import type { Difficulty, IDifficultyOption } from "./difficulty";

export type MapName = "Balanced" | "Thematic";

export interface IMap extends IDifficultyOption {
	name: MapName;
	difficulty: Difficulty;
}

export const MAPS: IMap[] = [
	{
		name: "Balanced",
		difficulty: 0,
	},
	{
		name: "Thematic",
		difficulty: 3,
	},
];