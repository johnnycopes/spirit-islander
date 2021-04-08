import type { Players } from "./game/players";
import type { Difficulty } from "./game/difficulty";
import type { MapName } from "./game/maps";
import type { BalancedBoardName } from "./game/board";
import type { ExpansionName } from "./game/expansions";
import type { SpiritName, AspectName } from "./game/spirits";
import type { AdversaryName, AdversaryLevelId } from "./game/adversaries";
import type { ScenarioName } from "./game/scenarios";

/**
 * A collection of selected options that a user either 
 * wants or would be willing to have in a `IGameSetup`
 */
export interface IConfig {
	expansions: ExpansionName[];
	players: Players;
	difficulty: Difficulty;
	spiritOrAspectNames: (SpiritName | AspectName)[];
	mapNames: MapName[];
	boardNames: BalancedBoardName[];
	scenarioNames: ScenarioName[];
	adversaryNamesAndIds: (AdversaryName | AdversaryLevelId)[];
}
