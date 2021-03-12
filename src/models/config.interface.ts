import type { Players } from "./game/players";
import type { Difficulty } from "./game/difficulty";
import type { MapName } from "./game/maps";
import type { ExpansionName } from "./game/expansions";
import type { SpiritName } from "./game/spirits";
import type { AdversaryName, AdversaryLevelId } from "./game/adversaries";
import type { ScenarioName } from "./game/scenarios";

/**
 * A collection of selected options that are a
 * user either wants or would be willing to have
 * in a game
 */
export interface IConfig {
	players: Players;
	difficulty: Difficulty;
	expansions: ExpansionName[];
	maps: MapName[];
	spirits: SpiritName[];
	adversaries: (AdversaryName | AdversaryLevelId)[];
	scenarios: ScenarioName[];
}
