import type { DifficultyOption } from "./difficulty";
import type { ExpansionOption } from "./expansions";

export type MapName = "Balanced" | "Thematic";

export interface Map extends DifficultyOption<MapName>, ExpansionOption<MapName> {}
