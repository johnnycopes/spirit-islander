<script lang="ts">
	import { SPIRITS } from "@models/game/spirits";
	import Selection from "@features/Selection.svelte";
	import Results from "@features/Results.svelte";
	import type { ISelection } from "@models/selection.interface";
	import type { IInstructions } from "@models/instructions.interface";
	import { createInstructions } from "@functions/create-instructions";

	let page: "Selection" | "Results" = "Selection";
	let selection: ISelection = {
		players: 1,
		difficulty: 0,
		maps: ["Balanced"],
		expansions: [],
		spirits: SPIRITS.map(spirit => spirit.name),
		adversaries: ["No Adversary"],
		scenarios: ["No Scenario"],
	};
	let instructions: IInstructions | undefined;
</script>

<main class="container">
	<div class="title">
		<h1>Spirit Islander</h1>
		<p>A setup generator for the board game Spirit Island</p>
	</div>
	{#if page === "Selection"}
		<Selection {...selection}
			on:selection={(e) => {
				page = "Results";
				selection = e.detail;
				instructions = createInstructions(selection);
			}
		} />
	{:else if page === "Results" && instructions}
		<Results {...instructions}
			on:reset={() => page = "Selection" }
		/>
	{/if}
</main>

<style>
	.container {
		margin: 0 auto;
		padding: 32px 0;
		max-width: 1024px;
	}

	.title {
		text-align: center;
		margin-bottom: 48px;
	}
</style>