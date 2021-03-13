<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Button from "@shared/Button.svelte";
	import CheckboxesField from "@shared/CheckboxesField.svelte";
	import DifficultyEmblem from "@shared/DifficultyEmblem.svelte";
	import ExpansionEmblem from "@shared/ExpansionEmblem.svelte";
	import Fieldset from "@shared/Fieldset.svelte";
	import Field from "@shared/Field.svelte";
	import Select from "@shared/Select.svelte";
	import type { IConfig } from "@models/config.interface";
	import type { ICombo } from "@models/combo.interface";
	import type { Players } from "@models/game/players";
	import type { Difficulty } from "@models/game/difficulty";
	import type { MapName } from "@models/game/maps";
	import type { ExpansionName } from "@models/game/expansions";
	import type { SpiritName } from "@models/game/spirits";
	import type { AdversaryName, AdversaryLevelId } from "@models/game/adversaries";
	import type { ScenarioName } from "@models/game/scenarios";
	import { SPIRITS } from "@data/spirits";
	import { EXPANSIONS } from "@data/expansions";
	import { MAPS } from "@data/maps";
	import { ADVERSARIES } from "@data/adversaries";
	import { SCENARIOS } from "@data/scenarios";
	import { createArray } from "@functions/utility/create-array";
	import { filterExpansions } from "@functions/filter-expansions";
	import { getDifficulty } from "@functions/get-difficulty";
	import { getValidCombos } from "@functions/get-valid-combos";
	import { pluralize } from "@functions/utility/pluralize";

	export let players: Players;
	export let difficulty: Difficulty;
	export let expansions: ExpansionName[];
	export let spirits: SpiritName[];
	export let adversaries: (AdversaryName | AdversaryLevelId)[];
	export let scenarios: ScenarioName[];
	export let maps: MapName[];
	const dispatcher = createEventDispatcher<{
		submit: {
			config: IConfig,
			validCombos: ICombo[],
		}
	}>();

	let config: IConfig;
	let validCombos: ICombo[];
	$: { config = { players, expansions, difficulty, maps, spirits, adversaries, scenarios }};
	$: { validCombos = getValidCombos(config) };
	$: spiritsError = players > spirits.length;
	$: mapsError = !maps.length;
	$: scenariosError = !scenarios.length;
	$: adversariesError = !adversaries.length;
	$: difficultyError = !validCombos.length;
	$: formDisabled = spiritsError || mapsError || scenariosError || adversariesError || difficultyError;

	function onSubmit(): void {
		dispatcher("submit", { config, validCombos });
	}
</script>

<form class="form">
	<Fieldset name="You"
		description="What are you playing with?"
	>
		<Field name="players">
			<Select label="Number of players"
				options={createArray(4)}
				bind:value={players}
			/>
		</Field>

		<Field name="difficulty"
			error={difficultyError}
			errorMessage="Combination of selected maps, adversaries, and scenarios cannot make a game with level {difficulty} difficulty"
		>
			<Select label="Desired level of difficulty"
				options={createArray(10, 0)}
				bind:value={difficulty}
			/>
		</Field>
		
		<Field name="expansions">
			<CheckboxesField title="Expansions"
				items={EXPANSIONS}
				let:item={expansion}
				bind:model={expansions}
			>
				{expansion}
			</CheckboxesField>
		</Field>
	</Fieldset>

	<Fieldset name="The Game"
		description="What are you open to playing with?"
	>
		<Field name="spirits"
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
		</Field>

		<Field name="maps"
			error={mapsError}
			errorMessage="At least 1 option must be selected"
		>
			<CheckboxesField title="Maps"
				items={filterExpansions(MAPS, expansions)}
				getId={(map) => map.name}
				let:item={map}
				bind:model={maps}
			>
				{map.name} <DifficultyEmblem value={getDifficulty(map.difficulty, config)} />
			</CheckboxesField>
		</Field>

		<Field name="adversaries"
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
					Level {entity.level} <DifficultyEmblem value={getDifficulty(entity.difficulty, config)} />
				{/if}
			</CheckboxesField>
		</Field>
	
		<Field name="scenarios"
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
		</Field>
	</Fieldset>

	<Button on:clicked={onSubmit}
		disabled={formDisabled}
	>
		Generate!
	</Button>
</form>


<style>
	.form {
		display: flex;
		flex-direction: column;
	}

	.form :global(.you) {
		grid-template-areas:
			"players expansions"
			"difficulty expansions"
	}

	.form :global(.the-game) {
		grid-template-areas:
			"spirits spirits"
			"maps scenarios"
			"adversaries adversaries"
	}

	.form :global(.button) {
		margin: 0 auto;
		width: 256px;
	}

	.form :global(.checkbox-label) {
		display: inline-flex;
		align-items: center;
	}

	.form :global(.spirits) :global(.checkboxes-level-1),
	.form :global(.adversaries) :global(.checkboxes-level-1) {
		display: flex;
		flex-wrap: wrap;
	}

	.form :global(.spirits) :global(.checkbox-item-level-1) {
		flex: 1 0 50%;
	}

	.form :global(.adversaries) :global(.checkbox-item-level-1) {
		flex: 1 0 auto;
	}

	.form :global(.difficulty-emblem),
	.form :global(.expansion-emblem) {
		margin-left: 8px;
	}
</style>