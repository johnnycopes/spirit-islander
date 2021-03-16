import type { IGameSetup } from "@models/game-setup.interface";

export const MOCK_GAME_SETUP: IGameSetup = {
	adversary: { id: "none", level: 0, difficulty: 0 },
	difficulty: 3,
	expansions: [],
	map: "Thematic",
	players: 1,
	scenario: "Blitz",
	spirits: ["Ocean's Hungry Grasp"],
};