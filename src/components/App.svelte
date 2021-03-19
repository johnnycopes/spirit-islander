<script lang="ts">
	import Header from "@components/core/Header.svelte";
	import Footer from "@components/core/Footer.svelte";
	import Config from "@components/features/Config.svelte";
	import GameSetup from "@components/features/GameSetup.svelte";
	import { 
		createAdversariesModel,
		createMapsModel,
		createScenariosModel,
		createSpiritsModel,
	} from "@functions/create-model";
	import { createGameSetup } from "@functions/create-game-setup";
	import { EPage } from "@models/page.enum";
	import type { ICombo } from "@models/combo.interface";
	import type { IConfig } from "@models/config.interface";
	import type { IGameSetup } from "@models/game-setup.interface";

	// import { MOCK_CONFIG, MOCK_VALID_COMBOS, MOCK_GAME_SETUP } from "@debugging/mock-data";
	// 	let page: EPage = EPage.GameSetup;
	// 	let config: IConfig = MOCK_CONFIG;
	// 	let validCombos: ICombo[] | undefined = MOCK_VALID_COMBOS;
	// 	let gameSetup: IGameSetup | undefined = MOCK_GAME_SETUP;

	let page: EPage = EPage.Config;
	let config: IConfig = {
		players: 1,
		difficulty: 0,
		expansions: [],
		spiritNames: createSpiritsModel(),
		mapNames: createMapsModel(),
		scenarioNames: createScenariosModel(),
		adversaryNamesAndIds: createAdversariesModel(),
	};
	let validCombos: ICombo[] | undefined;
	let gameSetup: IGameSetup | undefined;
</script>

<Header />
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
<Footer />
