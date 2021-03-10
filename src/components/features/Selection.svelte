<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Button from "@shared/Button.svelte";
	import CheckboxesField from "@shared/CheckboxesField.svelte";
	import DifficultyEmblem from "@shared/DifficultyEmblem.svelte";
	import ExpansionEmblem from "@shared/ExpansionEmblem.svelte";
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
	import { createArray } from "@functions/create-array";
	import { filterExpansions } from "@functions/filter-expansions";
	import { getDifficulty } from "@functions/get-difficulty";
	import { getValidCombos } from "@functions/get-valid-combos";
	import { pluralize } from "@functions/pluralize";

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

	$: gameConfig = { players, expansions, difficulty };
	$: validCombinations = getValidCombos(gameConfig, maps, adversaries, scenarios);
	$: spiritsError = players > spirits.length;
	$: mapsError = !maps.length;
	$: scenariosError = !scenarios.length;
	$: adversariesError = !adversaries.length;
	$: difficultyError = !validCombinations.length;
	$: formDisabled = spiritsError || mapsError || scenariosError || adversariesError || difficultyError;

	function onSubmit(): void {
		const selection: ISelection = {
			players, expansions, spirits, difficulty, maps, adversaries, scenarios,
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
			items={filterExpansions(SPIRITS, expansions)}
			getId={(spirit) => spirit.name}
			bind:model={spirits}
			let:item={spirit}
		>
			{spirit.name} <ExpansionEmblem value={spirit.expansion} />
		</CheckboxesField>
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
		errorMessage="At least 1 option must be selected"
	>
		<CheckboxesField title="Maps"
			items={filterExpansions(MAPS, expansions)}
			getId={(map) => map.name}
			let:item={map}
			bind:model={maps}
		>
			{map.name} <DifficultyEmblem value={getDifficulty(map.difficulty, gameConfig)} />
		</CheckboxesField>
	</FormField>

	<FormField name="adversaries"
		error={adversariesError}
		errorMessage="At least 1 option must be selected"
	>
		<CheckboxesField title="Adversaries"
			items={filterExpansions(ADVERSARIES, expansions)}
			getId={(entity => entity.name || entity.id)}
			getChildren={(entity) => entity.levels}
			bind:model={adversaries}
			let:item={entity}
		>
			{#if entity.name}
				{entity.name} <ExpansionEmblem value={entity.expansion} />
			{:else}
				Level {entity.level} <DifficultyEmblem value={getDifficulty(entity.difficulty, gameConfig)} />
			{/if}
		</CheckboxesField>
	</FormField>

	<FormField name="scenarios"
		error={scenariosError}
		errorMessage="At least 1 option must be selected"
	>
		<CheckboxesField title="Scenarios"
			items={filterExpansions(SCENARIOS, expansions)}
			getId={(scenario) => scenario.name}
			let:item={scenario}
			bind:model={scenarios}
		>
			{scenario.name}
			<DifficultyEmblem value={scenario.difficulty} />
			<ExpansionEmblem value={scenario.expansion} />
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

	.form :global(.checkbox-label) {
		display: inline-flex;
		align-items: center;
	}

	.form :global(.checkbox-item-level-1) {
		flex: 1 0 auto;
	}

	.form :global(.adversaries) :global(.checkboxes-level-1) {
		display: flex;
	}

	.form :global(.difficulty-emblem),
	.form :global(.expansion-emblem) {
		margin-left: 8px;
	}
</style>