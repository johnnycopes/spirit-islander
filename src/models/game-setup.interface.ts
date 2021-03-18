import type { Players } from "./game/players";
import type { Difficulty } from "./game/difficulty";
import type { ISpirit } from "./game/spirits";
import type { ExpansionName } from "./game/expansions";
import type { IAdversaryLevel } from "./game/adversaries";
import type { IScenario } from "./game/scenarios";
import type { IMap } from "./game/maps";

/**
 * Collection of options chosen before play that determine the
 * necessary components when setting up a game of Spirit Island
 */
export interface IGameSetup {
	players: Players;
	difficulty: Difficulty;
	expansions: ExpansionName[];
	spirits: ISpirit[];
	adversary: IAdversaryLevel;
	scenario: IScenario;
	map: IMap;
}
