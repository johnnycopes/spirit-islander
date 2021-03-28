import type { IOption } from "./option";

export type ExpansionName =
	"Branch & Claw" |
	"Jagged Earth" |
	"Promo Pack 1" |
	"Promo Pack 2"
;

export interface IExpansionOption extends IOption {
	expansion?: ExpansionName;
}
