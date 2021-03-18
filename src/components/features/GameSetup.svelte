<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Button from "@shared/Button.svelte";
	import Card from "@shared/Card.svelte";
	import Page from "@shared/Page.svelte";
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
</script>

<Page>
	<div class="game-setup page-content">
		<Fieldset name="Setup"
			description="Details of your generated game"
		>
			<Card name="players">
				<h4 class="card-header">
					Players
				</h4>
				<p class="content datum">
					{players}
				</p>
			</Card>
			<Card name="difficulty">
				<h4 class="card-header">
					Difficulty
				</h4>
				<p class="content datum">
					{difficulty}
				</p>
			</Card>
			<Card name="expansions">
				<h4 class="card-header">
					{pluralize(expansions.length, "Expansion")}
				</h4>
				<ul class="content">
					{#if expansions.length}
						{#each expansions as expansion}
							<li class="datum">
								{expansion}
							</li>
						{/each}
					{:else}
						<li>No Expansions</li>
					{/if}
				</ul>
			</Card>
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
	</div>

	<div class="page-buttons">
		<Button on:clicked={() => dispatcher("reset")}>
			Edit
		</Button>
		<Button on:clicked={() => dispatcher("generate")}>
			Generate
		</Button>
	</div>
</Page>

<style lang="scss">

	.game-setup  {

		:global(.setup) {
			grid-template-areas:
				"players difficulty expansions expansions"
				"spirits spirits map map"
				"scenario scenario adversary adversary";
		}
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
