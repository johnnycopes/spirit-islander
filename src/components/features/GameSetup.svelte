<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Button from "@shared/Button.svelte";
	import Card from "@shared/Card.svelte";
	import DifficultyEmblem from "@shared/DifficultyEmblem.svelte";
	import Fieldset from "@shared/Fieldset.svelte";
	import type { IAdversaryLevel } from "@models/game/adversaries";
	import type { Players } from "@models/game/players";
	import type { Difficulty } from "@models/game/difficulty";
	import type { IMap } from "@models/game/maps";
	import type { ExpansionName } from "@models/game/expansions";
	import type { IScenario } from "@models/game/scenarios";
	import type { ISpirit } from "@models/game/spirits";
	import { pluralize } from "@functions/utility/pluralize";
	import { getAdversaryById } from "@functions/get-adversary-by-id";
	import { getDifficulty } from "@functions/get-difficulty";
import ExpansionEmblem from "@shared/ExpansionEmblem.svelte";

	const dispatcher = createEventDispatcher<{
		reset: void;
		generate: void;
	}>();
	export let players: Players;
	export let difficulty: Difficulty;
	export let spirits: ISpirit[];
	export let expansions: ExpansionName[];
	export let map: IMap;
	export let adversary: IAdversaryLevel;
	export let scenario: IScenario;

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
					<li class="datum">
						{spirit.name}
						<ExpansionEmblem value={spirit.expansion} />
					</li>
				{/each}
			</ul>
		</Card>
		
		<Card name="map">
			<h4 class="card-header">
				Map
			</h4>
			<p class="content datum">
				{map.name} <DifficultyEmblem value={getDifficulty(map.difficulty, expansions)} />
			</p>
		</Card>
		
		<Card name="scenario">
			<h4 class="card-header">
				Scenario
			</h4>
			<p class="content datum">
				{scenario.name}
				<DifficultyEmblem value={getDifficulty(scenario.difficulty, expansions)} />
				<ExpansionEmblem value={scenario.expansion} />
			</p>
		</Card>
		
		<Card name="adversary">
			<h4 class="card-header">
				Adversary
			</h4>
			<p class="content datum">
				{adversaryName}
				{#if adversaryName !== "No Adversary"}
					Level {adversary.level}
					<DifficultyEmblem value={getDifficulty(adversary.difficulty, expansions)} />
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

	.datum {
		display: flex;
		align-items: center;
	}
</style>
