import type { Difficulty } from "./difficulty";
import type { ExpansionName } from "./expansions";
import type { Players } from "./players";

export interface IGameConfig {
	players: Players;
	expansions: ExpansionName[];
	difficulty: Difficulty;
}