import type { Difficulty, IDifficultyOption } from "./difficulty";
import type { ExpansionName, IExpansionOption } from "./expansions";

export type ScenarioName =
	"No Scenario" |
	"Blitz" |
	"Dahan Insurrection" |
	"Guard the Isle's Heart" |
	"Powers Long Forgotten" |
	"Rituals of Destroying Flame" |
	"Rituals of Terror" |
	"Second Wave" |
	"Ward the Shores";

export interface IScenario extends IDifficultyOption, IExpansionOption {
	name: ScenarioName;
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
		name: "Second Wave",
		difficulty: 0,
		expansion: "Branch & Claw",
	},
	{
		name: "Powers Long Forgotten",
		difficulty: 1,
		expansion: "Branch & Claw",
	},
	{
		name: "Ward the Shores",
		difficulty: 2,
		expansion: "Branch & Claw",
	},
	{
		name: "Rituals of Destroying Flame",
		difficulty: 3,
		expansion: "Branch & Claw",
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