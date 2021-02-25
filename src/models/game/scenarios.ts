import type { Difficulty } from "./difficulty";

export type ScenarioName =
	"Blitz" |
	"Dahan Insurrection" |
	"Guard the Isle's Heart" |
	"Rituals of Terror";

export interface IScenario {
	name: ScenarioName;
	difficulty: Difficulty;
}

export const SCENARIOS: IScenario[] = [
	{
		name: "Blitz",
		difficulty: 0,
	},
	{
		name: "Dahan Insurrection",
		difficulty: 4,
	},
	{
		name: "Guard the Isle's Heart",
		difficulty: 0,
	},
	{
		name: "Rituals of Terror",
		difficulty: 3
	},
];