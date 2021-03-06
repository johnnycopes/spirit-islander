<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Button from "@shared/Button.svelte";
	import CheckboxesField from "@shared/CheckboxesField.svelte";
	import FormField from "@shared/FormField.svelte";
	import Select from "@shared/Select.svelte";
	import type { ISelection } from "@models/selection.interface";
	import type { Players } from "@models/game/players";
	import type { Difficulty } from "@models/game/difficulty";
	import type { MapName } from "@models/game/maps";
	import type { ExpansionName } from "@models/game/expansions";
	import type { SpiritName } from "@models/game/spirits";
	import type { AdversaryName, AdversaryLevelId } from "@models/game/adversaries";
	import type { ScenarioName } from "@models/game/scenarios";
	import { SPIRITS } from "@models/game/spirits";
	import { EXPANSIONS } from "@models/game/expansions";
	import { MAPS } from "@models/game/maps";
	import { ADVERSARIES } from "@models/game/adversaries";
	import { SCENARIOS } from "@models/game/scenarios";
	import { getDifficultyError } from "@functions/calculations";
	import { pluralize } from "@functions/pluralize";
	import { createArray } from "@functions/create-array";

	export let players: Players;
	export let difficulty: Difficulty;
	export let expansions: ExpansionName[];
	export let spirits: SpiritName[];
	export let adversaries: (AdversaryName | AdversaryLevelId)[];
	export let scenarios: ScenarioName[];
	export let maps: MapName[];
	const dispatcher = createEventDispatcher<{
		selection: ISelection;
	}>();

	$: spiritsError = players > spirits.length;
	$: difficultyError = getDifficultyError(difficulty, maps, adversaries, scenarios);
	$: mapsError = !maps.length;
	$: formDisabled = spiritsError || difficultyError || mapsError;

	function onSubmit(): void {
		const selection: ISelection = {
			players, difficulty, maps, expansions, spirits, adversaries, scenarios,
		};
		dispatcher("selection", selection);
	}
</script>

<form class="form">
	<FormField name="players">
		<Select label="Number of players"
			options={createArray(4)}
			bind:value={players}
		/>
	</FormField>

	<FormField name="difficulty"
		error={difficultyError}
		errorMessage="Combination of selected maps, adversaries, and scenarios cannot make a game with level {difficulty} difficulty"
	>
		<Select label="Level of difficulty"
			options={createArray(10, 0)}
			bind:value={difficulty}
		/>
	</FormField>

	<FormField name="maps"
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

	<FormField name="expansions">
		<CheckboxesField title="Expansions"
			items={EXPANSIONS}
			let:item={expansion}
			bind:model={expansions}
		>
			{expansion}
		</CheckboxesField>
	</FormField>

	<FormField name="spirits"
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

	<FormField name="adversaries">
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

	<FormField name="scenarios">
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
			"players expansions"
			"spirits spirits"
			"difficulty maps"
			"adversaries adversaries"
			"scenarios scenarios";
		gap: 8px;
	}

	.form :global(.button) {
		grid-column: 1 / -1;
		justify-self: center;
		width: 256px;
		margin-top: 48px;
	}

	.form :global(.adversaries) :global(.checkboxes-level-1) {
		display: flex;
	}

	.form :global(.checkbox-item-level-1) {
		flex: 1;
	}
</style>