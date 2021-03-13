import type { IMap } from "./game/maps";
import type { IAdversaryLevel } from "./game/adversaries";
import type { IScenario } from "./game/scenarios";

/**
 * A valid combination of game setup options that 
 * together add up to a given level of `Difficulty`
 */
export type ICombo = [IMap, IAdversaryLevel, IScenario];