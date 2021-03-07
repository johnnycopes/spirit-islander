import type { ExpansionName, IExpansionOption } from "./expansions";

export type SpiritName =
	"A Spread of Rampant Green" |
	"Bringer of Dreams and Nightmares" |
	"Keeper of the Forbidden Wilds" |
	"Lightning's Swift Strike" |
	"Ocean's Hungry Grasp" |
	"River Surges in Sunlight" |
	"Shadows Flicker Like Flame" |
	"Sharp Fangs Behind the Leaves" |
	"Thunderspeaker" |
	"Vital Strength of the Earth";

export interface ISpirit extends IExpansionOption {
	name: SpiritName;
}

export const SPIRITS: ISpirit[] = [
	{ name: "A Spread of Rampant Green" },
	{ name: "Bringer of Dreams and Nightmares" },
	{ name: "Keeper of the Forbidden Wilds", expansion: "Branch & Claw" },
	{ name: "Lightning's Swift Strike" },
	{ name: "Ocean's Hungry Grasp" },
	{ name: "River Surges in Sunlight" },
	{ name: "Shadows Flicker Like Flame" },
	{ name: "Sharp Fangs Behind the Leaves", expansion: "Branch & Claw" },
	{ name: "Thunderspeaker" },
	{ name: "Vital Strength of the Earth" },
];