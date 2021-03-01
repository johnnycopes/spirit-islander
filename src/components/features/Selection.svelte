<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Button from "@shared/Button.svelte";
	import Checkboxes from "@shared/Checkboxes.svelte";
	import FormField from "@shared/FormField.svelte";
	import Select from "@shared/Select.svelte";
	import type { ISelection } from "@models/selection.interface";
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
	export let players: 1 | 2 | 3 | 4;
	export let difficulty: Difficulty;
	export let spirits: SpiritName[];
	export let adversaries: AdversaryName[];
	export let scenarios: ScenarioName[];
	export let maps: MapName[];
	
	$: adversaryDifficulty = tallyAdversaryDifficulty(adversaries ?? []);
	$: scenarioDifficulty = tallyScenarioDifficulty(scenarios ?? []);
	$: mapDifficulty = tallyMapDifficulty(maps ?? []);

	$: spiritsError = players > spirits.length;
	$: mapsError = !maps.length;
	$: formDisabled = spiritsError || mapsError;

	function onSubmit(): void {
		const selection: ISelection = {
			players, difficulty, spirits, adversaries, scenarios, maps,
		};
		dispatcher("selection", selection);
	}

	function tallyAdversaryDifficulty(model: string[]): number {
		const difficulty = model.reduce((accum, current) => {
			const adversary = ADVERSARIES.find(adversary => adversary.name === current);
			if (adversary) {
				return accum + adversary.levels[adversary.levels.length - 1].difficulty;
			}
			console.log("adversaries", accum);
			return accum;
		}, 0);
		console.log(difficulty);
		return difficulty;
	}

	function tallyScenarioDifficulty(model: string[]): number {
		return model.reduce((accum, current) => {
			const scenario = SCENARIOS.find(scenario => scenario.name === current);
			if (scenario) {
				return accum + scenario.difficulty;
			}
			console.log("scenarios", accum);
			return accum;
		}, 0);
	}

	function tallyMapDifficulty(model: string[]): number {
		return model.reduce((accum, current) => {
			const map = MAPS.find(map => map.name === current);
			if (map) {
				return accum + map.difficulty;
			}
			console.log("maps", accum);
			return accum;
		}, 0);
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
				display: `${adversary.name} (+${adversary.levels[0].difficulty} to +${adversary.levels[adversary.levels.length - 1].difficulty})`,
				disabled: difficulty < 1
			}))}
			bind:model={adversaries}
		/>
		{adversaryDifficulty}
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
		{scenarioDifficulty}
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
		{mapDifficulty}
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