<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Button from "@shared/Button.svelte";
	import Card from "@shared/Card.svelte";
	import Fieldset from "@shared/Fieldset.svelte";
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
	$: description = `${players} ${pluralize(players, "Player")} | Level ${difficulty} Difficulty`;
</script>

<div class="game-setup">
	<Fieldset name="Setup"
		description={description}
	>
		<Card name="spirits">
			<h4 class="card-header">
				{pluralize(players, "Spirit")}
			</h4>
			<ul class="content">
				{#each spirits as spirit}
					<li>{spirit}</li>
				{/each}
			</ul>
		</Card>
		
		<Card name="map">
			<h4 class="card-header">
				Map
			</h4>
			<p class="content">
				{map}
			</p>
		</Card>
		
		<Card name="scenario">
			<h4 class="card-header">
				Scenario
			</h4>
			<p class="content">
				{scenario}
			</p>
		</Card>
		
		<Card name="adversary">
			<h4 class="card-header">
				Adversary
			</h4>
			<p class="content">
				{adversaryName}
				{#if adversaryName !== "No Adversary"}
					Level {adversary.level}
				{/if}
			</p>
		</Card>
	</Fieldset>

	<Button on:clicked={() => dispatcher("reset")}>
		Reset
	</Button>
	<Button on:clicked={() => dispatcher("generate")}>
		Generate
	</Button>
</div>

<style lang="scss">
	:global(.setup) {
		grid-template-areas:
			"spirits spirits map map"
			"adversary adversary scenario scenario";
	}

	.card-header {
		margin-bottom: 0;
	}

	.content {
		padding: 16px;
	}
</style>
