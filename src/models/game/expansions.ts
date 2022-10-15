import type { Option } from "./option";

export type ExpansionName =
	"Branch & Claw" |
	"Horizons" |
	"Jagged Earth" |
	"Promo Pack 1" |
	"Promo Pack 2"
;

export interface ExpansionOption<TName extends string> extends Option<TName> {
	expansion?: ExpansionName;
}
