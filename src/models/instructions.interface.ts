import type { AdversaryName } from "./game/adversaries";
import type { Difficulty } from "./game/difficulty";
import type { MapName } from "./game/maps";
import type { ScenarioName } from "./game/scenarios";
import type { SpiritName } from "./game/spirits";

export interface IInstructions {
	players: 1 | 2 | 3 | 4;
	difficulty: Difficulty;
	spirits: SpiritName[];
	adversary: AdversaryName;
	scenario: ScenarioName;
	map: MapName;
}