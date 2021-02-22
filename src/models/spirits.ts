export type SpiritName =
	"A Spread of Rampant Green" |
	"Bringer of Dreams and Nightmares" |
	"Lightning's Swift Strike" |
	"Ocean's Hungry Grasp" |
	"River Surges in Sunlight" |
	"Shadows Flicker Like Flame" |
	"Thunderspeaker" |
	"Vital Strength of the Earth";

export type SpiritComplexity = "low" | "medium" | "high";

export interface ISpirit {
	name: SpiritName;
	complexity: SpiritComplexity;
}

export const SPIRITS: ISpirit[] = [
	{
		name: "A Spread of Rampant Green",
		complexity: "medium",
	},
	{
		name: "Bringer of Dreams and Nightmares",
		complexity: "high",
	},
	{
		name: "Lightning's Swift Strike",
		complexity: "low",
	},
	{
		name: "Ocean's Hungry Grasp",
		complexity: "high",
	},
	{
		name: "River Surges in Sunlight",
		complexity: "low",
	},
	{
		name: "Shadows Flicker Like Flame",
		complexity: "low",
	},
	{
		name: "Thunderspeaker",
		complexity: "medium",
	},
	{
		name: "Vital Strength of the Earth",
		complexity: "low",
	},
];