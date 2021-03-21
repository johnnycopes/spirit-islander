import { BOARDS } from "@data/boards";
import type { IBoard, BalancedBoardName } from "@models/game/board";

export function getBoardsByName(boardNames: BalancedBoardName[]): IBoard[] {
	const boards: IBoard[] = [];
	for (let boardName of boardNames) {
		const board = BOARDS.find(board => board.name === boardName);
		if (board) {
			boards.push(board);
		}
	}
	return boards;
}