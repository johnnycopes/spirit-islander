import {
	createAdversariesModel,
	createBoardsModel,
	createMapsModel,
	createScenariosModel,
	createSpiritsModel
} from "./create-model";

describe("createModel", () => {
	describe("createSpiritsModel", () => {
		it("gets base game spirits", () => {
			expect(createSpiritsModel()).toStrictEqual([
				"A Spread of Rampant Green",
				"Bringer of Dreams and Nightmares",
				"Lightning's Swift Strike",
				"Ocean's Hungry Grasp",
				"River Surges in Sunlight",
				"Shadows Flicker Like Flame",
				"Thunderspeaker",
				"Vital Strength of the Earth",
			]);
		});

		it("gets base game + Branch & Claw spirits", () => {
			expect(createSpiritsModel(["Branch & Claw"])).toStrictEqual([
				"A Spread of Rampant Green",
				"Bringer of Dreams and Nightmares",
				"Keeper of the Forbidden Wilds",
				"Lightning's Swift Strike",
				"Ocean's Hungry Grasp",
				"River Surges in Sunlight",
				"Shadows Flicker Like Flame",
				"Sharp Fangs Behind the Leaves",
				"Thunderspeaker",
				"Vital Strength of the Earth",
			]);
		});

		it("gets base game + Horizons spirits", () => {
			expect(createSpiritsModel(["Horizons"])).toStrictEqual([
				"A Spread of Rampant Green",
				"Bringer of Dreams and Nightmares",
				"Devouring Teeth Lurk Underfoot",
				"Eyes Watch From the Trees",
				"Fathomless Mud of the Swamp",
				"Lightning's Swift Strike",
				"Ocean's Hungry Grasp",
				"Rising Heat of Stone and Sand",
				"River Surges in Sunlight",
				"Shadows Flicker Like Flame",
				"Sun-Bright Whirlwind",
				"Thunderspeaker",
				"Vital Strength of the Earth",
			]);
		});

		it("gets base game + Jagged Earth spirits", () => {
			expect(createSpiritsModel(["Jagged Earth"])).toStrictEqual([
				"A Spread of Rampant Green",
				"Bringer of Dreams and Nightmares",
				"Fractured Days Split the Sky",
				"Grinning Trickster Stirs Up Trouble",
				"Lightning's Swift Strike",
				"Lure of the Deep Wilderness",
				"Many Minds Move as One",
				"Ocean's Hungry Grasp",
				"River Surges in Sunlight",
				"Shadows Flicker Like Flame",
				"Shifting Memory of Ages",
				"Shroud of Silent Mist",
				"Starlight Seeks Its Form",
				"Stone's Unyielding Defiance",
				"Thunderspeaker",
				"Vengeance as a Burning Plague",
				"Vital Strength of the Earth",
				"Volcano Looming High",
			]);
		});

		it("gets base game + Promo Pack 1 spirits", () => {
			expect(createSpiritsModel(["Promo Pack 1"])).toStrictEqual([
				"A Spread of Rampant Green",
				"Bringer of Dreams and Nightmares",
				"Heart of the Wildfire",
				"Lightning's Swift Strike",
				"Ocean's Hungry Grasp",
				"River Surges in Sunlight",
				"Serpent Slumbering Beneath the Island",
				"Shadows Flicker Like Flame",
				"Thunderspeaker",
				"Vital Strength of the Earth",
			]);
		});

		it("gets base game + Promo Pack 2 spirits", () => {
			expect(createSpiritsModel(["Promo Pack 2"])).toStrictEqual([
				"A Spread of Rampant Green",
				"Bringer of Dreams and Nightmares",
				"Downpour Drenches the World",
				"Finder of Paths Unseen",
				"Lightning's Swift Strike",
				"Ocean's Hungry Grasp",
				"River Surges in Sunlight",
				"Shadows Flicker Like Flame",
				"Thunderspeaker",
				"Vital Strength of the Earth",
			]);
		});
	});

	describe("createMapsModel", () => {
		it("gets the same two maps included with the base game, regardless of expansion", () => {
			expect(createMapsModel()).toStrictEqual(["Balanced", "Thematic"]);
			expect(createMapsModel([
				"Branch & Claw",
				"Jagged Earth",
				"Promo Pack 1",
				"Promo Pack 2"
			])).toStrictEqual(["Balanced", "Thematic"]);
		});
	});

	describe("createBoardsModel", () => {
		it("gets the four boards included with the base game", () => {
			expect(createBoardsModel()).toStrictEqual(["A", "B", "C", "D"]);
			expect(createBoardsModel([
				"Branch & Claw",
				"Promo Pack 1",
				"Promo Pack 2"
			])).toStrictEqual(["A", "B", "C", "D"]);
		});

		it("gets the two additional boards included with Jagged Earth", () => {
			expect(createBoardsModel(["Jagged Earth"])).toStrictEqual(["A", "B", "C", "D", "E", "F"]);
		});
	});

	describe("createScenariosModel", () => {
		it("gets base game scenarios", () => {
			expect(createScenariosModel()).toStrictEqual([
				"No Scenario",
				"Blitz",
				"Guard the Isle's Heart",
				"Rituals of Terror",
				"Dahan Insurrection",
			]);
		});

		it("gets base game + Branch & Claw scenarios", () => {
			expect(createScenariosModel(["Branch & Claw"])).toStrictEqual([
				"No Scenario",
				"Blitz",
				"Guard the Isle's Heart",
				"Second Wave",
				"Powers Long Forgotten",
				"Ward the Shores",
				"Rituals of Destroying Flame",
				"Rituals of Terror",
				"Dahan Insurrection",
			]);
		});

		it("gets base game + Jagged Earth scenarios", () => {
			expect(createScenariosModel(["Jagged Earth"])).toStrictEqual([
				"No Scenario",
				"Blitz",
				"Guard the Isle's Heart",
				"Elemental Invocation",
				"Despicable Theft",
				"Rituals of Terror",
				"The Great River",
				"Dahan Insurrection",
			]);
		});

		it("gets base game + Promo Pack 1 scenarios", () => {
			expect(createScenariosModel(["Promo Pack 1"])).toStrictEqual([
				"No Scenario",
				"Blitz",
				"Guard the Isle's Heart",
				"Rituals of Terror",
				"Dahan Insurrection",
			]);
		});

		it("gets base game + Promo Pack 2 scenarios", () => {
			expect(createScenariosModel(["Promo Pack 2"])).toStrictEqual([
				"No Scenario",
				"Blitz",
				"Guard the Isle's Heart",
				"A Diversity of Spirits",
				"Varied Terrains",
				"Rituals of Terror",
				"Dahan Insurrection",
			]);
		});
	});

	describe("createAdversariesModel", () => {
		it("gets base game adversaries", () => {
			expect(createAdversariesModel()).toStrictEqual([
				"No Adversary",
				"Brandenburg-Prussia", "bp-0", "bp-1", "bp-2", "bp-3", "bp-4", "bp-5", "bp-6",
				"England", "en-0", "en-1", "en-2", "en-3", "en-4", "en-5", "en-6",
				"Sweden", "sw-0", "sw-1", "sw-2", "sw-3", "sw-4", "sw-5", "sw-6",
			]);
		});

		it("gets base game + Branch & Claw adversaries", () => {
			expect(createAdversariesModel(["Branch & Claw"])).toStrictEqual([
				"No Adversary",
				"Brandenburg-Prussia", "bp-0", "bp-1", "bp-2", "bp-3", "bp-4", "bp-5", "bp-6",
				"England", "en-0", "en-1", "en-2", "en-3", "en-4", "en-5", "en-6",
				"France", "fr-0", "fr-1", "fr-2", "fr-3", "fr-4", "fr-5", "fr-6",
				"Sweden", "sw-0", "sw-1", "sw-2", "sw-3", "sw-4", "sw-5", "sw-6",
			]);
		});

		it("gets base game + Jagged Earth adversaries", () => {
			expect(createAdversariesModel(["Jagged Earth"])).toStrictEqual([
				"No Adversary",
				"Brandenburg-Prussia", "bp-0", "bp-1", "bp-2", "bp-3", "bp-4", "bp-5", "bp-6",
				"England", "en-0", "en-1", "en-2", "en-3", "en-4", "en-5", "en-6",
				"Habsburg Monarchy", "hm-0", "hm-1", "hm-2", "hm-3", "hm-4", "hm-5", "hm-6",
				"Russia", "ru-0", "ru-1", "ru-2", "ru-3", "ru-4", "ru-5", "ru-6",
				"Sweden", "sw-0", "sw-1", "sw-2", "sw-3", "sw-4", "sw-5", "sw-6",
			]);
		});

		it("gets base game + Promo Pack 1 adversaries", () => {
			expect(createAdversariesModel(["Promo Pack 1"])).toStrictEqual([
				"No Adversary",
				"Brandenburg-Prussia", "bp-0", "bp-1", "bp-2", "bp-3", "bp-4", "bp-5", "bp-6",
				"England", "en-0", "en-1", "en-2", "en-3", "en-4", "en-5", "en-6",
				"Sweden", "sw-0", "sw-1", "sw-2", "sw-3", "sw-4", "sw-5", "sw-6",
			]);
		});

		it("gets base game + Promo Pack 2 adversaries", () => {
			expect(createAdversariesModel(["Promo Pack 2"])).toStrictEqual([
				"No Adversary",
				"Brandenburg-Prussia", "bp-0", "bp-1", "bp-2", "bp-3", "bp-4", "bp-5", "bp-6",
				"England", "en-0", "en-1", "en-2", "en-3", "en-4", "en-5", "en-6",
				"Scotland", "sc-0", "sc-1", "sc-2", "sc-3", "sc-4", "sc-5", "sc-6",
				"Sweden", "sw-0", "sw-1", "sw-2", "sw-3", "sw-4", "sw-5", "sw-6",
			]);
		});
	});
});