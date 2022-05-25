import type { Map } from "@models/game/maps";

export const MAPS: Map[] = [
	{
		name: "Balanced",
		difficulty: 0,
	},
	{
		name: "Thematic",
		difficulty: (expansions) => {
			return expansions.some(expansion => 
				expansion === "Branch & Claw" || 
				expansion === "Jagged Earth")
			? 1
			: 3;
		},
	},
];