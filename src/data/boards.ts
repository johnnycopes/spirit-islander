import type { IBoard } from "@models/game/board";

export const BOARDS: IBoard[] = [
	{
		balanced: "A",
		thematic: "Northeast",
	},
	{
		balanced: "B",
		thematic: "East",
	},
	{
		balanced: "C",
		thematic: "Northwest",
	},
	{
		balanced: "D",
		thematic: "West",
	},
	{
		balanced: "E",
		thematic: "Southeast",
		expansion: "Jagged Earth",
	},
	{
		balanced: "F",
		thematic: "Southwest",
		expansion: "Jagged Earth",
	},
];