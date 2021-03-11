<script lang="ts">
	import { SPIRITS } from "@models/game/spirits";
	import Config from "@features/Config.svelte";
	import Results from "@features/Results.svelte";
	import type { IConfig } from "@models/config.interface";
	import type { IInstructions } from "@models/instructions.interface";
	import { createInstructions } from "@functions/create-instructions";

	let page: "Config" | "Results" = "Config";
	let config: IConfig = {
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
	{#if page === "Config"}
		<Config {...config}
			on:submit={(e) => {
				page = "Results";
				config = e.detail;
				instructions = createInstructions(config);
			}}
		/>
	{:else if page === "Results" && instructions}
		<Results {...instructions}
			on:reset={() => page = "Config" }
			on:generate={() => instructions = createInstructions(config) }
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