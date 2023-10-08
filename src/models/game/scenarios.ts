import type { DifficultyOption } from "./difficulty";
import type { ExpansionOption } from "./expansions";

export type ScenarioName =
	"No Scenario" |
	"A Diversity of Spirits" |
	"Blitz" |
	"Dahan Insurrection" |
	"Despicable Theft" |
	"Destiny Unfolds" |
	"Elemental Invocation" |
	"Guard the Isle's Heart" |
	"Powers Long Forgotten" |
	"Rituals of Destroying Flame" |
	"Rituals of Terror" |
	"Second Wave" |
	"Surges of Colonization" |
	"Surges of Colonization (Hard)" |
	"The Great River" |
	"Varied Terrains" |
	"Ward the Shores";

export interface Scenario extends DifficultyOption<ScenarioName>, ExpansionOption<ScenarioName> {}
