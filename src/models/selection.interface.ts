import type { Difficulty } from "./game/difficulty";
import type { SpiritName } from "./game/spirits";
import type { AdversaryName } from "./game/adversaries";
import type { ScenarioName } from "./game/scenarios";
import type { MapName } from "./game/maps";

export interface ISelection {
	players: 1 | 2 | 3 | 4;
	difficulty: Difficulty;
	spirits: SpiritName[];
	adversaries: AdversaryName[];
	scenarios: ScenarioName[];
	maps: MapName[];
}
