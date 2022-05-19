import type { Players } from "./game/players";
import type { Difficulty } from "./game/difficulty";
import type { Spirit } from "./game/spirits";
import type { ExpansionName } from "./game/expansions";
import type { AdversaryLevel } from "./game/adversaries";
import type { Scenario } from "./game/scenarios";
import type { Map } from "./game/maps";
import type { Board } from "./game/board";

/**
 * Collection of options chosen before play that
 * influence how to set up a game of Spirit Island
 */
export interface GameSetup {
	expansions: ExpansionName[];
	players: Players;
	difficulty: Difficulty;
	spirits: Spirit[];
	map: Map;
	boards: Board[];
	scenario: Scenario;
	adversaryLevel: AdversaryLevel;
}
