<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Button from "@shared/Button.svelte";
	import CheckboxesField from "@shared/CheckboxesField.svelte";
	import FormField from "@shared/FormField.svelte";
	import Select from "@shared/Select.svelte";
	import type { ISelection } from "@models/selection.interface";
	import type { Players } from "@models/game/players";
	import type { Difficulty } from "@models/game/difficulty";
	import type { SpiritName } from "@models/game/spirits";
	import type { AdversaryName } from "@models/game/adversaries";
	import type { ScenarioName } from "@models/game/scenarios";
	import type { MapName } from "@models/game/maps";
	import { SPIRITS } from "@models/game/spirits";
	import { ADVERSARIES } from "@models/game/adversaries";
	import { SCENARIOS } from "@models/game/scenarios";
	import { MAPS } from "@models/game/maps";
	import { pluralize } from "@functions/pluralize";
	import { createArray } from "@functions/create-array";
	import { tallyAdversaryDifficulty, tallyMapDifficulty, tallyScenarioDifficulty } from "@functions/calculations";

	export let players: Players;
	export let difficulty: Difficulty;
	export let spirits: SpiritName[];
	export let adversaries: AdversaryName[];
	export let scenarios: ScenarioName[];
	export let maps: MapName[];
	const dispatcher = createEventDispatcher<{
		selection: ISelection;
	}>();

	$: fieldsDifficulty = Math.max(
		tallyAdversaryDifficulty(adversaries),
		tallyScenarioDifficulty(scenarios),
		tallyMapDifficulty(maps)
	) as Difficulty;
	$: spiritsError = players > spirits.length;
	$: difficultyError = false;
	$: mapsError = !maps.length;
	$: formDisabled = spiritsError || difficultyError || mapsError;

	function onSubmit(): void {
		const selection: ISelection = {
			players, difficulty, spirits, adversaries, scenarios, maps,
		};
		dispatcher("selection", selection);
	}
</script>

<form class="form">
	<FormField gridArea="players">
		<Select label="Number of players"
			options={createArray(4)}
			bind:value={players}
		/>
	</FormField>

	<FormField gridArea="difficulty"
		error={difficultyError}
		errorMessage="Value exceeds the difficulty of selected options in the form"
	>
		<Select label="Level of difficulty"
			options={createArray(10, 0)}
			bind:value={difficulty}
		/>
	</FormField>

	<FormField gridArea="spirits"
		error={spiritsError}
		errorMessage={`At least ${players} ${pluralize(players, "spirit")} must be selected`}
	>
		<CheckboxesField title="Spirits"
			items={SPIRITS}
			getId={(spirit) => spirit.name}
			bind:model={spirits}
			let:item={spirit}
		>
			{spirit.name}
		</CheckboxesField>
	</FormField>

	<FormField gridArea="adversaries">
		<CheckboxesField title="Adversaries"
			items={ADVERSARIES}
			getId={(entity => entity.name || entity.id)}
			getDisabled={(entity) => difficulty < 1 || (entity.difficulty !== undefined && difficulty < entity.difficulty)}
			getChildren={(entity) => entity.levels}
			bind:model={adversaries}
			let:item={entity}
		>
			{#if entity.name}
				{entity.name}
			{:else}
				Level {entity.level} (+{entity.difficulty})
			{/if}
		</CheckboxesField>
	</FormField>

	<FormField gridArea="scenarios">
		<CheckboxesField title="Scenarios"
			items={SCENARIOS}
			getId={(scenario) => scenario.name}
			getDisabled={(scenario) => difficulty < scenario.difficulty}
			let:item={scenario}
			bind:model={scenarios}
		>
			{scenario.name} (+{scenario.difficulty})
		</CheckboxesField>
	</FormField>

	<FormField gridArea="maps"
		error={mapsError}
		errorMessage="At least 1 map must be selected"
	>
		<CheckboxesField title="Maps"
			items={MAPS}
			getId={(map) => map.name}
			getDisabled={(map) => difficulty < map.difficulty}
			let:item={map}
			bind:model={maps}
		>
			{map.name} (+{map.difficulty})
		</CheckboxesField>
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
		grid-template-rows: auto;
		grid-template-areas:
			"players difficulty"
			"maps scenarios"
			"spirits spirits"
			"adversaries adversaries";
		gap: 8px;
	}

	.form :global(.button) {
		grid-column: 1 / -1;
		justify-self: center;
		width: 256px;
		margin-top: 48px;
	}

	.form :global(.checkboxes) :global(.checkboxes) {
		margin-left: 24px;
	}
</style>