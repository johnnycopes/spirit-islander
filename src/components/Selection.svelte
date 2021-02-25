<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Button from "./Button.svelte";
	import type { ISelection } from "../models/selection";
	import type { Difficulty } from "../models/game/difficulty";
	import type { SpiritName } from "../models/game/spirits";
	import type { AdversaryName } from "../models/game/adversaries";
	import type { ScenarioName } from "../models/game/scenarios";
	import type { MapName } from "../models/game/maps";
	import { SPIRITS } from "../models/game/spirits";
	import { ADVERSARIES } from "../models/game/adversaries";
	import { SCENARIOS } from "../models/game/scenarios";
	import { MAPS } from "../models/game/maps";

	const dispatcher = createEventDispatcher<{
		selection: ISelection;
	}>();
	let players: 1 | 2 | 3 | 4 = 1;
	let difficulty: Difficulty = 0;
	let spirits: SpiritName[] = SPIRITS.map(spirit => spirit.name);
	let adversaries: AdversaryName[] = ADVERSARIES.map(adversary => adversary.name);
	let scenarios: ScenarioName[] = SCENARIOS.map(scenario => scenario.name);
	let maps: MapName[] = MAPS.map(map => map.name);

	function onSubmit(): void {
		const selection: ISelection = {
			players, difficulty, spirits, adversaries, scenarios, maps,
		};
		dispatcher("selection", selection);
	}
</script>

<form class="form">
	<div class="form-field">
		<label for="players-select">
			Number of players:
		</label>
		<select
			id="players-select"
			name="players"
			bind:value={players}
		>
			{#each Array(4) as _, i}
				<option value={i + 1}>
					{i + 1}
				</option>
			{/each}
		</select>
	</div>

	<div class="form-field">
		<label for="difficulty-select">
			Level of difficulty:
		</label>
		<select
			id="difficulty-select"
			name="difficulty"
			bind:value={difficulty}
		>
			{#each Array(11) as _, i}
				<option value={i}>
					{i}
				</option>
			{/each}
		</select>
	</div>

	<div class="form-field">
		<p class="form-field__header">Spirits:</p>
		<ul>
			{#each SPIRITS as spirit}
			<li>
				<label>
					<input 
						type="checkbox"
						value={spirit.name}
						bind:group={spirits}
					/>
					{spirit.name}
				</label>
			</li>
			{/each}
		</ul>
	</div>

	<div class="form-field">
		<p class="form-field__header">Adversaries:</p>
		<ul>
			{#each ADVERSARIES as adversary}
			<li>
				<label>
					<input 
						type="checkbox"
						value={adversary.name}
						bind:group={adversaries}
					/>
					{adversary.name}
				</label>
			</li>
			{/each}
		</ul>
	</div>

	<div class="form-field">
		<p class="form-field__header">Scenarios:</p>
		<ul>
			{#each SCENARIOS as scenario}
			<li>
				<label>
					<input 
						type="checkbox"
						value={scenario.name}
						bind:group={scenarios}
					/>
					{scenario.name}
				</label>
			</li>
			{/each}
		</ul>
	</div>

	<div class="form-field">
		<p class="form-field__header">Map:</p>
		<ul>
			{#each MAPS as islandMap}
			<li>
				<label>
					<input 
						type="checkbox"
						value={islandMap.name}
						bind:group={maps}
					/>
					{islandMap.name}
				</label>
			</li>
			{/each}
		</ul>
	</div>

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

	.form-field {
		padding: 16px;;
		background: #343c3c;
	}

	.form-field__header {
		margin-bottom: 8px;
	}

	select {
		font-family: var(--font);
		width: 64px;
		padding: 8px;
		font-size: 20px;
	}

	li {
		margin-bottom: 4px;
	}

	.form :global(.button) {
		grid-column: 1 / -1;
		justify-self: center;
		width: 256px;
		margin-top: 48px;
	}
</style>