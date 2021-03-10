export type ExpansionName =
	"Branch & Claw" |
	"Jagged Earth" |
	"Promo Pack 1" |
	"Promo Pack 2"
;

export interface IExpansionOption {
	expansion?: ExpansionName;
}

export const EXPANSIONS: ExpansionName[] = [
	"Branch & Claw",
	"Jagged Earth",
	"Promo Pack 1",
	"Promo Pack 2"
];