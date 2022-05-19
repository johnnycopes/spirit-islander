import type { ExpansionOption } from "./expansions";

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

export interface Board extends ExpansionOption {
	name: BalancedBoardName;
	thematicName: ThematicBoardName;
}
