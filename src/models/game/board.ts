import type { IExpansionOption } from "./expansions";

export type BalancedBoardName =
	"A" |
	"B" |
	"C" |
	"D" |
	"E" |
	"F";

export type ThematicBoardName =
	"Northeast" |
	"East" |
	"Northwest" |
	"West" |
	"Southeast" |
	"Southwest";

export interface IBoard extends IExpansionOption {
	name: BalancedBoardName;
	thematicName: ThematicBoardName;
}
