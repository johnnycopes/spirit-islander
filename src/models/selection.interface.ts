import type { Players } from "./game/players";
import type { Difficulty } from "./game/difficulty";
import type { MapName } from "./game/maps";
import type { ExpansionName } from "./game/expansions";
import type { SpiritName } from "./game/spirits";
import type { AdversaryName, AdversaryLevelId } from "./game/adversaries";
import type { ScenarioName } from "./game/scenarios";

export interface ISelection {
	players: Players;
	difficulty: Difficulty;
	maps: MapName[];
	expansions: ExpansionName[];
	spirits: SpiritName[];
	adversaries: (AdversaryName | AdversaryLevelId)[];
	scenarios: ScenarioName[];
}
