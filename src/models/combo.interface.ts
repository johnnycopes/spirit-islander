import type { Map } from "./game/maps";
import type { AdversaryLevel } from "./game/adversaries";
import type { Scenario } from "./game/scenarios";

/**
 * A valid combination of game setup options that 
 * together add up to a given level of `Difficulty`
 */
export type Combo = [Map, AdversaryLevel, Scenario];