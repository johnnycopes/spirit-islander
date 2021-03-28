import { BOARDS } from "@data/boards";
import type { BalancedBoardName, IBoard } from "@models/game/board";
import type { MapName } from "@models/game/maps";
import type { Players } from "@models/game/players";
import { getOptionsByName } from "./get-options";
import { selectRandom } from "./utility/select-random";

export function selectBoards(
	mapName: MapName,
	players: Players,
	boardNames: BalancedBoardName[]
): IBoard[] {
	if (mapName === "Balanced") {
		const randomBoardNames = selectRandom(boardNames, players);
		return getBoardsByName(randomBoardNames);
	}
	switch (players) {
		case 1: {
			return getBoardsByName(["A"]);
		}
		case 2: {
			return getBoardsByName(["D", "B"]);
		}
		case 3: {
			return getBoardsByName(["D", "B", "A"]);
		}
		case 4: {
			return getBoardsByName(["D", "B", "A", "C"]);
		}
		case 5: {
			return getBoardsByName(["D", "B", "A", "C", "F"]);
		}
		case 6: {
			return getBoardsByName(["D", "B", "A", "C", "F", "E"]);
		}
	};
}

function getBoardsByName(boardNames: BalancedBoardName[]): IBoard[] {
	return getOptionsByName(BOARDS, boardNames);
}