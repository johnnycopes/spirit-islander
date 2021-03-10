import type { IDifficultyOption } from "./difficulty";
import type { IExpansionOption } from "./expansions";

export type ScenarioName =
	"No Scenario" |
	"Blitz" |
	"Dahan Insurrection" |
	"Despicable Thief" |
	"Elemental Invocation" |
	"Guard the Isle's Heart" |
	"Powers Long Forgotten" |
	"Rituals of Destroying Flame" |
	"Rituals of Terror" |
	"Second Wave" |
	"The Great River" |
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
		name: "Elemental Invocation",
		difficulty: 0,
		expansion: "Jagged Earth",
	},
	{
		name: "Powers Long Forgotten",
		difficulty: 1,
		expansion: "Branch & Claw",
	},
	{
		name: "Despicable Thief",
		difficulty: 2,
		expansion: "Jagged Earth",
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
		name: "The Great River",
		difficulty: 3,
		expansion: "Jagged Earth",
	},
	{
		name: "Dahan Insurrection",
		difficulty: 4,
	},
];