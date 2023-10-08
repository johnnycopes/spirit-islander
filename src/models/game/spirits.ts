import type { ExpansionOption } from "./expansions";

export type SpiritName =
	"A Spread of Rampant Green" |
	"Breath of Darkness Down Your Spine" |
	"Bringer of Dreams and Nightmares" |
	"Dances Up Earthquakes" |
	"Devouring Teeth Lurk Underfoot" |
	"Downpour Drenches the World" |
	"Ember-Eyed Behemoth" |
	"Eyes Watch From the Trees" |
	"Fathomless Mud of the Swamp" |
	"Finder of Paths Unseen" |
	"Fractured Days Split the Sky" |
	"Grinning Trickster Stirs Up Trouble" |
	"Heart of the Wildfire" |
	"Hearth-Vigil" |
	"Keeper of the Forbidden Wilds" |
	"Lightning's Swift Strike" |
	"Lure of the Deep Wilderness" |
	"Many Minds Move as One" |
	"Ocean's Hungry Grasp" |
	"Relentless Gaze of the Sun" |
	"Rising Heat of Stone and Sand" |
	"River Surges in Sunlight" |
	"Serpent Slumbering Beneath the Island" |
	"Shadows Flicker Like Flame" |
	"Sharp Fangs Behind the Leaves" |
	"Shifting Memory of Ages" |
	"Shroud of Silent Mist" |
	"Sun-Bright Whirlwind" |
	"Starlight Seeks Its Form" |
	"Stone's Unyielding Defiance" |
	"Thunderspeaker" |
	"Towering Roots of the Jungle" |
	"Vengeance as a Burning Plague" |
	"Vital Strength of the Earth" |
	"Volcano Looming High" |
	"Wandering Voice Keens Delirium" |
	"Wounded Waters Bleeding";

export interface Spirit extends ExpansionOption<SpiritName> {}
