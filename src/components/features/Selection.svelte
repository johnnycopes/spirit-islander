<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Button from "@shared/Button.svelte";
	import Checkbox from "@shared/Checkbox.svelte";
	import CheckboxNew from "@shared/CheckboxNew.svelte";
	import Checkboxes from "@shared/Checkboxes.svelte";
	import CheckboxesNew from "@shared/CheckboxesNew.svelte";
	import FormField from "@shared/FormField.svelte";
	import Select from "@shared/Select.svelte";
	import type { CheckboxModel } from "@shared/checkbox-model.type";
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

	const dispatcher = createEventDispatcher<{
		selection: ISelection;
	}>();
	export let players: Players;
	export let difficulty: Difficulty;
	export let spirits: SpiritName[];
	export let spiritsObj: Record<string, CheckboxModel> = {};
	export let adversaries: AdversaryName[];
	export let scenarios: ScenarioName[];
	export let maps: MapName[];
	let checkboxModel = false;

	$: fieldsDifficulty = Math.max(
		tallyAdversaryDifficulty(adversaries),
		tallyScenarioDifficulty(scenarios),
		tallyMapDifficulty(maps)
	) as Difficulty;
	$: spiritsError = players > spirits.length;
	$: difficultyError = fieldsDifficulty < difficulty;
	$: mapsError = !maps.length;
	$: formDisabled = spiritsError || difficultyError || mapsError;

	function onSubmit(): void {
		const selection: ISelection = {
			players, difficulty, spirits, adversaries, scenarios, maps,
		};
		dispatcher("selection", selection);
	}
</script>

<CheckboxNew
	value="My Value"
	bind:checked={checkboxModel}
>
	display value goes here
</CheckboxNew>

<CheckboxesNew
	items={SPIRITS.map(spirit => ({
		value: spirit.name,
		display: spirit.name,
	}))}
	model={spiritsObj}
	let:value
	on:change={e => spiritsObj = e.detail}
>
	<p>{value}</p>
</CheckboxesNew>
<hr>

<form class="form">
	<FormField>
		<Select label="Number of players"
			options={createArray(4)}
			bind:value={players}
		/>
	</FormField>

	<FormField
		error={difficultyError}
		errorMessage="Value exceeds the difficulty of selected options in the form"
	>
		<Select label="Level of difficulty"
			options={createArray(10, 0)}
			bind:value={difficulty}
		/>
	</FormField>

	<FormField
		error={spiritsError}
		errorMessage={`At least ${players} ${pluralize(players, "spirit")} must be selected`}
	>
		<Checkboxes title="Spirits"
			items={SPIRITS.map(spirit => ({
				value: spirit.name,
				display: spirit.name,
			}))}
			bind:model={spirits}
		/>
	</FormField>

	<FormField>
		<Checkboxes title="Adversaries"
			items={ADVERSARIES.map(adversary => ({
				value: adversary.name,
				display: `${adversary.name} (+${adversary.levels[0]} to +${adversary.levels[6]})`,
				disabled: difficulty < 1
			}))}
			bind:model={adversaries}
		/>
	</FormField>

	<FormField>
		<Checkboxes title="Scenarios"
			items={SCENARIOS.map(scenario => ({
				value: scenario.name,
				display: `${scenario.name} (+${scenario.difficulty})`,
				disabled: difficulty < scenario.difficulty
			}))}
			bind:model={scenarios}
		/>
	</FormField>

	<FormField
		error={mapsError}
		errorMessage="At least 1 map must be selected"
	>
		<Checkboxes title="Maps"
			items={MAPS.map(map => ({
				value: map.name,
				display: `${map.name} (+${map.difficulty})`,
				disabled: difficulty < map.difficulty
			}))}
			bind:model={maps}
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