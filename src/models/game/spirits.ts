import type { ExpansionOption } from "./expansions";

export type SpiritName =
	"A Spread of Rampant Green" |
	"Bringer of Dreams and Nightmares" |
	"Downpour Drenches the World" |
	"Finder of Paths Unseen" |
	"Fractured Days Split the Sky" |
	"Grinning Trickster Stirs Up Trouble" |
	"Heart of the Wildfire" |
	"Keeper of the Forbidden Wilds" |
	"Lightning's Swift Strike" |
	"Lure of the Deep Wilderness" |
	"Many Minds Move as One" |
	"Ocean's Hungry Grasp" |
	"River Surges in Sunlight" |
	"Serpent Slumbering Beneath the Island" |
	"Shadows Flicker Like Flame" |
	"Sharp Fangs Behind the Leaves" |
	"Shifting Memory of Ages" |
	"Shroud of Silent Mist" |
	"Starlight Seeks Its Form" |
	"Stone's Unyielding Defiance" |
	"Thunderspeaker" |
	"Vengeance as a Burning Plague" |
	"Vital Strength of the Earth" |
	"Volcano Looming High" |
	"Devouring Teeth Lurk Underfoot" | 
	"Eyes Watch From the Trees" |
	"Fathomless Mud of the Swamp" | 
	"Rising Heat of Stone and Sand" | 
	"Sun-Bright Whirlwind";

export interface Spirit extends ExpansionOption<SpiritName> {}
