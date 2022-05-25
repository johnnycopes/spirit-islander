import type { Board } from "@models/game/board";

export const BOARDS: Board[] = [
	{
		name: "A",
		thematicName: "Northeast",
	},
	{
		name: "B",
		thematicName: "East",
	},
	{
		name: "C",
		thematicName: "Northwest",
	},
	{
		name: "D",
		thematicName: "West",
	},
	{
		name: "E",
		thematicName: "Southeast",
		expansion: "Jagged Earth",
	},
	{
		name: "F",
		thematicName: "Southwest",
		expansion: "Jagged Earth",
	},
];