<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Button from "@shared/Button.svelte";
	import Checkboxes from "@shared/Checkboxes.svelte";
	import FormField from "@shared/FormField.svelte";
	import Select from "@shared/Select.svelte";
	import type { ISelection } from "@models/selection";
	import type { Difficulty } from "@models/game/difficulty";
	import type { SpiritName } from "@models/game/spirits";
	import type { AdversaryName } from "@models/game/adversaries";
	import type { ScenarioName } from "@models/game/scenarios";
	import type { MapName } from "@models/game/maps";
	import { SPIRITS } from "@models/game/spirits";
	import { ADVERSARIES } from "@models/game/adversaries";
	import { SCENARIOS } from "@models/game/scenarios";
	import { MAPS } from "@models/game/maps";
	import { pluralize } from "@utility/pluralize";
	import { createArr } from "@utility/create-array";

	const dispatcher = createEventDispatcher<{
		selection: ISelection;
	}>();
	let players: 1 | 2 | 3 | 4 = 1;
	let difficulty: Difficulty = 0;
	let spirits: SpiritName[] = SPIRITS.map(spirit => spirit.name);
	let adversaries: AdversaryName[] = [];
	let scenarios: ScenarioName[] = [];
	let maps: MapName[] = ["Balanced"];
	$: spiritsError = players > spirits.length;
	$: mapsError = !maps.length;
	$: formDisabled = spiritsError || mapsError;

	function onSubmit(): void {
		const selection: ISelection = {
			players, difficulty, spirits, adversaries, scenarios, maps,
		};
		dispatcher("selection", selection);
	}
</script>

<form class="form">
	<FormField>
		<Select label="Number of players"
			options={createArr(4)}
			bind:value={players}
		/>
	</FormField>

	<FormField>
		<Select label="Level of difficulty"
			options={createArr(10, 0)}
			bind:value={difficulty}
		/>
	</FormField>

	<FormField
		error={spiritsError}
		errorMessage={`At least ${players} ${pluralize(players, "spirit")} must be selected`}
	>
		<Checkboxes name="Spirits"
			items={SPIRITS.map(spirit => ({ name: spirit.name }) )}
			bind:group={spirits}
		/>
	</FormField>

	<FormField>
		<Checkboxes name="Adversaries"
			items={ADVERSARIES.map(adversary => ({
				name: adversary.name,
				disabled: difficulty < 1
			}))}
			bind:group={adversaries}
		/>
	</FormField>

	<FormField>
		<Checkboxes name="Scenarios"
			items={SCENARIOS.map(scenario => ({
				name: scenario.name,
				disabled: difficulty < scenario.difficulty
			}))}
			bind:group={scenarios}
		/>
	</FormField>

	<FormField
		error={mapsError}
		errorMessage="At least 1 map must be selected"
	>
		<Checkboxes name="Maps"
			items={MAPS.map(map => ({
				name: map.name,
				disabled: difficulty < map.difficulty
			}))}
			bind:group={maps}
		/>
	</FormField>

	<Button on:clicked={onSubmit}
		disabled={formDisabled}
	>
		Submit
	</Button>
</form>


<style>
	.form {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 8px;
	}

	.form :global(.button) {
		grid-column: 1 / -1;
		justify-self: center;
		width: 256px;
		margin-top: 48px;
	}
</style>