import type { Option } from "./option";

export type ExpansionName =
	"Branch & Claw" |
	"Jagged Earth" |
	"Promo Pack 1" |
	"Promo Pack 2" |
	"Horizons of Spirit Island"
;

export interface ExpansionOption<TName extends string> extends Option<TName> {
	expansion?: ExpansionName;
}
