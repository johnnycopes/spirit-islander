import type { Players } from "./game/players";
import type { Difficulty } from "./game/difficulty";
import type { SpiritName } from "./game/spirits";
import type { AdversaryLevel, AdversaryName } from "./game/adversaries";
import type { ScenarioName } from "./game/scenarios";
import type { MapName } from "./game/maps";

export interface IInstructions {
	players: Players;
	difficulty: Difficulty;
	spirits: SpiritName[];
	adversary: {
		name: AdversaryName;
		level: AdversaryLevel;
	} | undefined;
	scenario: ScenarioName | undefined;
	map: MapName;
}