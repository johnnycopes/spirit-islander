import type { IDifficultyOption } from "./difficulty";
import type { IExpansionOption } from "./expansions";

export type MapName = "Balanced" | "Thematic";

export interface IMap extends IDifficultyOption, IExpansionOption {
	name: MapName;
}

export const MAPS: IMap[] = [
	{
		name: "Balanced",
		difficulty: 0,
	},
	{
		name: "Thematic",
		difficulty: (gameConfig) => gameConfig.expansions.includes("Branch & Claw") ? 1 : 3,
	},
];