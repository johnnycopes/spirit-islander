import type { Difficulty } from "./difficulty";
import { tallyDifficulty } from "@utility/tally-difficulty";

export type MapName = "Balanced" | "Thematic";
export interface IMap {
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

export function tallyMapDifficulty(model: MapName[] = []): Difficulty {
	return tallyDifficulty(
		model,
		MAPS,
		(map) => map.name,
		(map) => map.difficulty,
	);
}