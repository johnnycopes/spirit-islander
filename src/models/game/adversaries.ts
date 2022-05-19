import type { IDifficultyOption } from "./difficulty";
import type { IExpansionOption } from "./expansions";

export type AdversaryName =
	"No Adversary" |
	"Brandenburg-Prussia" |
	"France" |
	"England" |
	"Habsburg Monarchy" |
	"Russia" |
	"Scotland" |
	"Sweden";

export type AdversaryLevelName =
	"N/A" |
	"Level 0" |
	"Level 1" |
	"Level 2" |
	"Level 3" |
	"Level 4" |
	"Level 5" |
	"Level 6";

export interface IAdversaryLevel extends IDifficultyOption {
	id: AdversaryLevelId;
	name: AdversaryLevelName;
}

export type AdversaryLevelId = "none" |
	"bp-0" | "bp-1" | "bp-2" | "bp-3" | "bp-4" | "bp-5" | "bp-6" |
	"en-0" | "en-1" | "en-2" | "en-3" | "en-4" | "en-5" | "en-6" |
	"fr-0" | "fr-1" | "fr-2" | "fr-3" | "fr-4" | "fr-5" | "fr-6" |
	"hm-0" | "hm-1" | "hm-2" | "hm-3" | "hm-4" | "hm-5" | "hm-6" |
	"ru-0" | "ru-1" | "ru-2" | "ru-3" | "ru-4" | "ru-5" | "ru-6" |
	"sc-0" | "sc-1" | "sc-2" | "sc-3" | "sc-4" | "sc-5" | "sc-6" |
	"sw-0" | "sw-1" | "sw-2" | "sw-3" | "sw-4" | "sw-5" | "sw-6";

export interface IAdversary extends IExpansionOption {
	name: AdversaryName,
	levels: IAdversaryLevel[];
}
