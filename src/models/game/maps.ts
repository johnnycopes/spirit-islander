import type { IDifficultyOption } from "./difficulty";
import type { IExpansionOption } from "./expansions";

export type MapName = "Balanced" | "Thematic";

export interface IMap extends IDifficultyOption, IExpansionOption {
	name: MapName;
}
