import type { Difficulty, IDifficultyOption } from "./difficulty";

export type ScenarioName =
	"No Scenario" |
	"Blitz" |
	"Dahan Insurrection" |
	"Guard the Isle's Heart" |
	"Rituals of Terror";

export interface IScenario extends IDifficultyOption {
	name: ScenarioName;
	difficulty: Difficulty;
}

export const SCENARIOS: IScenario[] = [
	{
		name: "No Scenario",
		difficulty: 0,
	},
	{
		name: "Blitz",
		difficulty: 0,
	},
	{
		name: "Guard the Isle's Heart",
		difficulty: 0,
	},
	{
		name: "Rituals of Terror",
		difficulty: 3
	},
	{
		name: "Dahan Insurrection",
		difficulty: 4,
	},
];