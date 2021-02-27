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

	function onSubmit(): void {
		const selection: ISelection = {
			players, difficulty, spirits, adversaries, scenarios, maps,
		};
		dispatcher("selection", selection);
	}
</script>

<form class="form">
	<FormField>
		<Select
			label="Number of players"
			options={createArr(4)}
			bind:value={players}
		/>
	</FormField>

	<FormField>
		<Select
			label="Level of difficulty"
			options={createArr(10, 0)}
			bind:value={difficulty}
		/>
	</FormField>

	<FormField header="Spirits"
		error={players > spirits.length}
		errorMessage={`At least ${players} ${pluralize(players, "spirit")} must be selected`}
	>
		<Checkboxes
			items={SPIRITS.map(spirit => spirit.name)}
			bind:group={spirits}
		/>
	</FormField>

	<FormField header="Adversaries">
		<Checkboxes
			items={ADVERSARIES.map(adversary => adversary.name)}
			bind:group={adversaries}
		/>
	</FormField>

	<FormField header="Scenarios">
		<Checkboxes
			items={SCENARIOS.map(scenario => scenario.name)}
			bind:group={adversaries}
		/>
	</FormField>

	<FormField header="Map"
		error={!maps.length}
		errorMessage="At least 1 map must be selected"
	>
		<Checkboxes
			items={MAPS.map(map => map.name)}
			bind:group={adversaries}
		/>
	</FormField>

	<Button on:clicked={onSubmit}>
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