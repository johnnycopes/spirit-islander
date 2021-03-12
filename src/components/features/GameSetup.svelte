<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Button from "@shared/Button.svelte";
	import type { IAdversaryLevel } from "@models/game/adversaries";
	import type { Players } from "@models/game/players";
	import type { Difficulty } from "@models/game/difficulty";
	import type { MapName } from "@models/game/maps";
	import type { ExpansionName } from "@models/game/expansions";
	import type { ScenarioName } from "@models/game/scenarios";
	import type { SpiritName } from "@models/game/spirits";
	import { pluralize } from "@functions/utility/pluralize";
	import { getAdversaryById } from "@functions/get-adversary-by-id";

	const dispatcher = createEventDispatcher<{
		reset: void;
		generate: void;
	}>();
	export let players: Players;
	export let difficulty: Difficulty;
	export let spirits: SpiritName[];
	export let expansions: ExpansionName[];
	export let map: MapName;
	export let adversary: IAdversaryLevel;
	export let scenario: ScenarioName;

	$: adversaryName = getAdversaryById(adversary.id);
</script>

<Button on:clicked={() => dispatcher("reset")}>
	Reset
</Button>
<Button on:clicked={() => dispatcher("generate")}>
	Generate
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
				Expansions
			</td>
			<td>
				{#if !expansions.length}
					No Expansions
				{:else}
					<ul>
						{#each expansions as expansion}
							<li>{expansion}</li>
						{/each}
					</ul>
				{/if}
			</td>
		</tr>
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
				{adversaryName}
				{#if adversaryName !== "No Adversary"}
					Level {adversary.level}
				{/if}
			</td>
		</tr>
		<tr>
			<td>
				Scenario
			</td>
			<td>
				{scenario}
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
