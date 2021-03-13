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
