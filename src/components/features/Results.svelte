<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Button from "@shared/Button.svelte";
	import type { AdversaryLevel, AdversaryName } from "@models/game/adversaries";
	import type { Difficulty } from "@models/game/difficulty";
	import type { MapName } from "@models/game/maps";
	import type { ScenarioName } from "@models/game/scenarios";
	import type { SpiritName } from "@models/game/spirits";
	import { pluralize } from "@functions/pluralize";

	const dispatcher = createEventDispatcher<{
		reset: void;
	}>();
	export let players: 1 | 2 | 3 | 4;
	export let difficulty: Difficulty;
	export let spirits: SpiritName[];
	export let map: MapName;
	export let adversary: {
		name: AdversaryName,
		level: AdversaryLevel,
	} | undefined = undefined;
	export let scenario: ScenarioName | undefined = undefined;
</script>

<Button on:clicked={() => dispatcher("reset")}>
	Reset
</Button>
<table>
	<thead>
		<tr>
			<th colspan="2">
				{players} {pluralize(players, "Player")} | Level {difficulty} Difficulty
			</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				Spirits
			</td>
			<td>
				<ul>
					{#each spirits as spirit}
						<li>{spirit}</li>
					{/each}
				</ul>
			</td>
		</tr>
		<tr>
			<td>
				Map
			</td>
			<td>
				{map}
			</td>
		</tr>
		<tr>
			<td>
				Adversary
			</td>
			<td>
				{#if adversary}
					{adversary.name}<br>
					{adversary.level}
				{:else}
					None
				{/if}
			</td>
		</tr>
		<tr>
			<td>
				Scenario
			</td>
			<td>
				{scenario || "None"}
			</td>
		</tr>
	</tbody>
</table>

<style>
	table {
		width: 100%;
		border-collapse: collapse;
	}
	th, td {
		padding: 24px 48px;
		border-bottom: 1px solid white;
	}
</style>
