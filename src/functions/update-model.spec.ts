import { createSpiritsModel } from "./create-model";
import { updateModel } from "./update-model";

describe("updateModel", () => {
	it("adds individual expansion's items to existing model", () => {
		expect(updateModel(
			createSpiritsModel,
			[],
			["Branch & Claw"],
			"Branch & Claw",
		)).toStrictEqual([
			"Keeper of the Forbidden Wilds",
			"Sharp Fangs Behind the Leaves",
		]);

		expect(updateModel(
			createSpiritsModel,
			["Thunderspeaker"],
			["Branch & Claw"],
			"Branch & Claw",
		)).toStrictEqual([
			"Thunderspeaker",
			"Keeper of the Forbidden Wilds",
			"Sharp Fangs Behind the Leaves",
		]);

		expect(updateModel(
			createSpiritsModel,
			["Heart of the Wildfire", "Thunderspeaker"],
			["Branch & Claw", "Promo Pack 1"],
			"Branch & Claw",
		)).toStrictEqual([
			"Heart of the Wildfire",
			"Thunderspeaker",
			"Keeper of the Forbidden Wilds",
			"Sharp Fangs Behind the Leaves",
		]);
	});

	it("adds all expansions' items to existing model", () => {
		expect(updateModel(
			createSpiritsModel,
			[],
			["Branch & Claw", "Jagged Earth", "Promo Pack 1", "Promo Pack 2"],
			"Expansions",
		)).toStrictEqual([
			"Downpour Drenches the World",
			"Finder of Paths Unseen",
			"Fractured Days Split the Sky",
			"Grinning Trickster Stirs Up Trouble",
			"Heart of the Wildfire",
			"Keeper of the Forbidden Wilds",
			"Lure of the Deep Wilderness",
			"Many Minds Move as One",
			"Serpent Slumbering Beneath the Island",
			"Sharp Fangs Behind the Leaves",
			"Shifting Memory of Ages",
			"Shroud of Silent Mist",
			"Starlight Seeks Its Form",
			"Stone's Unyielding Defiance",
			"Vengeance as a Burning Plague",
			"Volcano Looming High",
		]);

		expect(updateModel(
			createSpiritsModel,
			["Thunderspeaker"],
			["Branch & Claw", "Jagged Earth", "Promo Pack 1", "Promo Pack 2"],
			"Expansions",
		)).toStrictEqual([
			"Thunderspeaker",
			"Downpour Drenches the World",
			"Finder of Paths Unseen",
			"Fractured Days Split the Sky",
			"Grinning Trickster Stirs Up Trouble",
			"Heart of the Wildfire",
			"Keeper of the Forbidden Wilds",
			"Lure of the Deep Wilderness",
			"Many Minds Move as One",
			"Serpent Slumbering Beneath the Island",
			"Sharp Fangs Behind the Leaves",
			"Shifting Memory of Ages",
			"Shroud of Silent Mist",
			"Starlight Seeks Its Form",
			"Stone's Unyielding Defiance",
			"Vengeance as a Burning Plague",
			"Volcano Looming High",
		]);

		expect(updateModel(
			createSpiritsModel,
			["Keeper of the Forbidden Wilds", "Thunderspeaker"],
			["Branch & Claw", "Jagged Earth", "Promo Pack 1", "Promo Pack 2"],
			"Expansions",
		)).toStrictEqual([
			"Keeper of the Forbidden Wilds",
			"Thunderspeaker",
			"Downpour Drenches the World",
			"Finder of Paths Unseen",
			"Fractured Days Split the Sky",
			"Grinning Trickster Stirs Up Trouble",
			"Heart of the Wildfire",
			"Keeper of the Forbidden Wilds", // TODO: fix this bug where an item can be added twice if it already exists in the model and "Expansions" is selected
			"Lure of the Deep Wilderness",
			"Many Minds Move as One",
			"Serpent Slumbering Beneath the Island",
			"Sharp Fangs Behind the Leaves",
			"Shifting Memory of Ages",
			"Shroud of Silent Mist",
			"Starlight Seeks Its Form",
			"Stone's Unyielding Defiance",
			"Vengeance as a Burning Plague",
			"Volcano Looming High",
		]);
	});

	it("removes individual expansion's items from existing model", () => {
		expect(updateModel(
			createSpiritsModel,
			["Keeper of the Forbidden Wilds", "Sharp Fangs Behind the Leaves"],
			[],
			"Branch & Claw",
		)).toStrictEqual([]);

		expect(updateModel(
			createSpiritsModel,
			["Keeper of the Forbidden Wilds", "Sharp Fangs Behind the Leaves", "Thunderspeaker"],
			[],
			"Branch & Claw",
		)).toStrictEqual(["Thunderspeaker"]);

		expect(updateModel(
			createSpiritsModel,
			[
				"Heart of the Wildfire",
				"Keeper of the Forbidden Wilds",
				"Sharp Fangs Behind the Leaves",
				"Thunderspeaker",
			],
			["Promo Pack 1"],
			"Branch & Claw",
		)).toStrictEqual(["Heart of the Wildfire", "Thunderspeaker"]);
	});

	it("removes all expansions' items from existing model", () => {
		expect(updateModel(
			createSpiritsModel,
			[],
			[],
			"Expansions",
		)).toStrictEqual([]);

		expect(updateModel(
			createSpiritsModel,
			["Thunderspeaker"],
			[],
			"Expansions",
		)).toStrictEqual(["Thunderspeaker"]);

		expect(updateModel(
			createSpiritsModel,
			[
				"Downpour Drenches the World",
				"Finder of Paths Unseen",
				"Fractured Days Split the Sky",
				"Grinning Trickster Stirs Up Trouble",
				"Heart of the Wildfire",
				"Keeper of the Forbidden Wilds",
				"Lure of the Deep Wilderness",
				"Many Minds Move as One",
				"Serpent Slumbering Beneath the Island",
				"Sharp Fangs Behind the Leaves",
				"Shifting Memory of Ages",
				"Shroud of Silent Mist",
				"Starlight Seeks Its Form",
				"Stone's Unyielding Defiance",
				"Thunderspeaker",
				"Vengeance as a Burning Plague",
				"Volcano Looming High",
			],
			[],
			"Expansions",
		)).toStrictEqual(["Thunderspeaker"]);
	});
});
