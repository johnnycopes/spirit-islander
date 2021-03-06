import type { AdversaryLevelId } from "@models/game/adversaries";
import type { Difficulty } from "@models/game/difficulty";
import type { MapName } from "@models/game/maps";
import type { ScenarioName } from "@models/game/scenarios";

export interface IGame {
	adversary?: AdversaryLevelId;
	scenario?: ScenarioName;
	map?: MapName;
}

export const GAMES: Record<Difficulty, IGame[]> = {
	0: [],
	1: [
		{ adversary: "bp-0" },
		{ adversary: "e-0" },
		{ adversary: "s-0" },
	],
	2: [
		{ adversary: "bp-1" },
		{ adversary: "s-1" },
	],
	3: [
		{ adversary: "e-1" },
		{ adversary: "s-2" },
		{ scenario: "Rituals of Terror" },
		{ map: "Thematic" },
	],
	4: [
		{ adversary: "bp-2" },
		{ adversary: "e-2" },
		{ scenario: "Rituals of Terror", adversary: "bp-0" },
		{ scenario: "Rituals of Terror", adversary: "e-0" },
		{ scenario: "Rituals of Terror", adversary: "s-0" },
		{ scenario: "Dahan Insurrection" },
		{ map: "Thematic", adversary: "bp-0" },
		{ map: "Thematic", adversary: "e-0" },
		{ map: "Thematic", adversary: "s-0" },
	],
	5: [
		{ adversary: "s-3" },
		{ scenario: "Rituals of Terror", adversary: "bp-1" },
		{ scenario: "Rituals of Terror", adversary: "s-1" },
		{ scenario: "Dahan Insurrection", adversary: "bp-0" },
		{ scenario: "Dahan Insurrection", adversary: "e-0" },
		{ scenario: "Dahan Insurrection", adversary: "s-0" },
		{ map: "Thematic", adversary: "bp-1" },
		{ map: "Thematic", adversary: "s-1" },
	],
	6: [
		{ adversary: "bp-3" },
		{ adversary: "e-3" },
		{ adversary: "s-4" },
		{ scenario: "Rituals of Terror", adversary: "e-1" },
		{ scenario: "Rituals of Terror", adversary: "s-2" },
		{ scenario: "Dahan Insurrection", adversary: "bp-1" },
		{ scenario: "Dahan Insurrection", adversary: "s-1" },
		{ map: "Thematic", adversary: "e-1" },
		{ map: "Thematic", adversary: "s-2" },
		{ map: "Thematic", scenario: "Rituals of Terror" },
	],
	7: [
		{ adversary: "bp-4" },
		{ adversary: "e-4" },
		{ adversary: "s-5" },
		{ scenario: "Rituals of Terror", adversary: "bp-2" },
		{ scenario: "Rituals of Terror", adversary: "e-2" },
		{ scenario: "Dahan Insurrection", adversary: "e-1" },
		{ scenario: "Dahan Insurrection", adversary: "s-2" },
		{ map: "Thematic", adversary: "bp-2" },
		{ map: "Thematic", adversary: "e-2" },
		{ map: "Thematic", scenario: "Dahan Insurrection", },
		{ map: "Thematic", scenario: "Rituals of Terror", adversary: "bp-0" },
		{ map: "Thematic", scenario: "Rituals of Terror", adversary: "e-0" },
		{ map: "Thematic", scenario: "Rituals of Terror", adversary: "s-0" },
	],
	8: [
		{ adversary: "s-6" },
		{ scenario: "Rituals of Terror", adversary: "s-3" },
		{ scenario: "Dahan Insurrection", adversary: "bp-2" },
		{ scenario: "Dahan Insurrection", adversary: "e-2" },
		{ map: "Thematic", adversary: "s-3" },
		{ map: "Thematic", scenario: "Rituals of Terror", adversary: "bp-1" },
		{ map: "Thematic", scenario: "Rituals of Terror", adversary: "s-1" },
		{ map: "Thematic", scenario: "Dahan Insurrection", adversary: "bp-0" },
		{ map: "Thematic", scenario: "Dahan Insurrection", adversary: "e-0" },
		{ map: "Thematic", scenario: "Dahan Insurrection", adversary: "s-0" },
	],
	9: [
		{ adversary: "bp-5", },
		{ adversary: "e-5", },
		{ scenario: "Rituals of Terror", adversary: "bp-3" },
		{ scenario: "Rituals of Terror", adversary: "e-3" },
		{ scenario: "Rituals of Terror", adversary: "s-4" },
		{ scenario: "Dahan Insurrection", adversary: "s-3" },
		{ map: "Thematic", adversary: "bp-3" },
		{ map: "Thematic", adversary: "e-3" },
		{ map: "Thematic", adversary: "s-4" },
		{ map: "Thematic", scenario: "Rituals of Terror", adversary: "e-1" },
		{ map: "Thematic", scenario: "Rituals of Terror", adversary: "s-2" },
		{ map: "Thematic", scenario: "Dahan Insurrection", adversary: "bp-1" },
		{ map: "Thematic", scenario: "Dahan Insurrection", adversary: "s-1" },
	],
	10: [
		{ adversary: "bp-6" },
		{ adversary: "e-6" },
		{ scenario: "Rituals of Terror", adversary: "bp-4" },
		{ scenario: "Rituals of Terror", adversary: "e-4" },
		{ scenario: "Rituals of Terror", adversary: "s-5" },
		{ scenario: "Dahan Insurrection", adversary: "bp-3" },
		{ scenario: "Dahan Insurrection", adversary: "e-3" },
		{ scenario: "Dahan Insurrection", adversary: "s-4" },
		{ map: "Thematic", adversary: "bp-4" },
		{ map: "Thematic", adversary: "e-4" },
		{ map: "Thematic", adversary: "s-5" },
		{ map: "Thematic", scenario: "Rituals of Terror", adversary: "bp-2" },
		{ map: "Thematic", scenario: "Rituals of Terror", adversary: "e-2" },
		{ map: "Thematic", scenario: "Dahan Insurrection", adversary: "e-1" },
		{ map: "Thematic", scenario: "Dahan Insurrection", adversary: "s-2" },
	],
}