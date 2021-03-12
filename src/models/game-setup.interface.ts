import type { Players } from "./game/players";
import type { Difficulty } from "./game/difficulty";
import type { SpiritName } from "./game/spirits";
import type { ExpansionName } from "./game/expansions";
import type { IAdversaryLevel } from "./game/adversaries";
import type { ScenarioName } from "./game/scenarios";
import type { MapName } from "./game/maps";

export interface IGameSetup {
	players: Players;
	difficulty: Difficulty;
	expansions: ExpansionName[];
	spirits: SpiritName[];
	adversary: IAdversaryLevel;
	scenario: ScenarioName;
	map: MapName;
}
