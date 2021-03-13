import type { Players } from "./game/players";
import type { Difficulty } from "./game/difficulty";
import type { SpiritName } from "./game/spirits";
import type { ExpansionName } from "./game/expansions";
import type { IAdversaryLevel } from "./game/adversaries";
import type { ScenarioName } from "./game/scenarios";
import type { MapName } from "./game/maps";

/**
 * Collection of options chosen before play that determine the
 * necessary components when setting up a game of Spirit Island
 */
export interface IGameSetup {
	players: Players;
	difficulty: Difficulty;
	expansions: ExpansionName[];
	spirits: SpiritName[];
	adversary: IAdversaryLevel;
	scenario: ScenarioName;
	map: MapName;
}
