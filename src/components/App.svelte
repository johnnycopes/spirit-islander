<script lang="ts">
	import { onMount } from "svelte";
	import Header from "@components/core/Header.svelte";
	import Footer from "@components/core/Footer.svelte";
	import Config from "@components/features/Config.svelte";
	import GameSetup from "@components/features/GameSetup.svelte";
	import { 
		createAdversariesModel,
		createBoardsModel,
		createMapsModel,
		createScenariosModel,
		createSpiritsModel,
	} from "@functions/create-model";
	import { createGameSetup } from "@functions/create-game-setup";
	import { EPage } from "@models/page.enum";
	import type { ICombo } from "@models/combo.interface";
	import type { IConfig } from "@models/config.interface";
	import type { IGameSetup } from "@models/game-setup.interface";

	let page: EPage = EPage.Config;
	let config: IConfig = {
		expansions: [],
		players: 1,
		difficultyRange: [0, 1],
		spiritNames: createSpiritsModel(),
		mapNames: createMapsModel(),
		boardNames: createBoardsModel(),
		scenarioNames: createScenariosModel(),
		adversaryNamesAndIds: createAdversariesModel(),
	};
	let validCombos: ICombo[] | undefined;
	let gameSetup: IGameSetup | undefined;

	onMount(() => {
		const configJSON = localStorage.getItem("SPIRIT_ISLANDER_CONFIG");
		if (configJSON) {
			config = JSON.parse(configJSON);
		}
	});

	function setConfigInLocalStorage(config: IConfig): void {
		const configJSON = JSON.stringify(config);
		localStorage.setItem("SPIRIT_ISLANDER_CONFIG", configJSON);
	}
</script>

<Header />
{#if page === EPage.Config}
	<Config {...config}
		on:generate={(e) => {
			page = EPage.GameSetup;
			config = e.detail.config;
			validCombos = e.detail.validCombos;
			gameSetup = createGameSetup(config, validCombos);
			setConfigInLocalStorage(config);
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
