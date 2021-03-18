<script lang="ts">
	import Config from "@features/Config.svelte";
	import GameSetup from "@features/GameSetup.svelte";
	import type { IConfig } from "@models/config.interface";
	import type { ICombo } from "@models/combo.interface";
	import type { IGameSetup } from "@models/game-setup.interface";
	import { EPage } from "@models/page.enum";
	import { createGameSetup } from "@functions/create-game-setup";
	import { 
		createMapsModel,
		createScenariosModel,
		createSpiritsModel,
		createAdversariesModel
	} from "@functions/create-model";
	import { MOCK_CONFIG } from "@debugging/mock-config";
	import { MOCK_VALID_COMBOS } from "@debugging/mock-valid-combos";
	import { MOCK_GAME_SETUP } from "@debugging/mock-game-setup";

		let page: EPage = EPage.GameSetup;
		let config: IConfig = MOCK_CONFIG;
		let validCombos: ICombo[] | undefined = MOCK_VALID_COMBOS;
		let gameSetup: IGameSetup | undefined = MOCK_GAME_SETUP;

	// let page: EPage = EPage.Config;
	// let config: IConfig = {
	// 	players: 1,
	// 	difficulty: 0,
	// 	expansions: [],
	// 	maps: createMapsModel(),
	// 	spirits: createSpiritsModel(),
	// 	adversaries: createAdversariesModel(),
	// 	scenarios: createScenariosModel(),
	// };
	// let validCombos: ICombo[] | undefined;
	// let gameSetup: IGameSetup | undefined;
</script>

<main class="container">
	<div class="title">
		<h1>Spirit Islander</h1>
		<p>A setup generator for the board game Spirit Island</p>
	</div>
	{#if page === EPage.Config}
		<Config {...config}
			on:generate={(e) => {
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

<style lang="scss">
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