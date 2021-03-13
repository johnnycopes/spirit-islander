<script lang="ts">
	import { SPIRITS } from "@data/spirits";
	import Config from "@features/Config.svelte";
	import GameSetup from "@features/GameSetup.svelte";
	import type { IConfig } from "@models/config.interface";
	import type { ICombo } from "@models/combo.interface";
	import type { IGameSetup } from "@models/game-setup.interface";
	import { EPage } from "@models/page.enum";
	import { createGameSetup } from "@functions/create-game-setup";

	let page: EPage = EPage.Config;
	let config: IConfig = {
		players: 1,
		difficulty: 0,
		maps: ["Balanced"],
		expansions: [],
		spirits: SPIRITS.map(spirit => spirit.name),
		adversaries: ["No Adversary"],
		scenarios: ["No Scenario"],
	};
	let validCombos: ICombo[] | undefined;
	let gameSetup: IGameSetup | undefined;
</script>

<main class="container">
	<div class="title">
		<h1>Spirit Islander</h1>
		<p>A setup generator for the board game Spirit Island</p>
	</div>
	{#if page === EPage.Config}
		<Config {...config}
			on:submit={(e) => {
				page = EPage.GameSetup;
				config = e.detail.config;
				validCombos = e.detail.validCombos;
				gameSetup = createGameSetup(config, validCombos);
			}}
		/>
	{:else if page === EPage.GameSetup && gameSetup && validCombos}
		<GameSetup {...gameSetup}
			on:reset={() => page = EPage.Config}
			on:generate={() => {
				if (validCombos) {
					gameSetup = createGameSetup(config, validCombos);
				}
			}}
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