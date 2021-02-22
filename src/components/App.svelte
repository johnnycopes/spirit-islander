<script lang="ts">
	import type { Difficulty } from "../models/difficulty";
	import type { SpiritName } from "../models/spirits";
	import type { AdversaryName } from "../models/adversaries";
	import type { ScenarioName } from "../models/scenarios";
	import type { MapName } from "../models/maps";
	import { SPIRITS } from "../models/spirits";
	import { ADVERSARIES } from "../models/adversaries";
	import { SCENARIOS } from "../models/scenarios";
	import { MAPS } from "../models/maps";

	let players: 1 | 2 | 3 | 4 = 1;
	let difficulty: Difficulty = 0;
	let spirits: SpiritName[] = SPIRITS.map(spirit => spirit.name);
	let adversaries: AdversaryName[] = ADVERSARIES.map(adversary => adversary.name);
	let scenarios: ScenarioName[] = SCENARIOS.map(scenario => scenario.name);
	let map: MapName = "Balanced";
</script>

<main class="container">
	<div class="title">
		<h1>Spirit Islander</h1>
		<p>A setup generator for the board game Spirit Island</p>
	</div>

	<form>
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
							type="radio"
							value={islandMap.name}
							bind:group={map}
						/>
						{islandMap.name}
					</label>
				</li>
				{/each}
			</ul>
		</div>
	</form>
</main>

<style>
	.container {
		margin: 32px auto;
		max-width: 768px;
	}

	.title {
		text-align: center;
		margin-bottom: 48px;
	}

	.form-field {
		margin-bottom: 24px;
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

</style>