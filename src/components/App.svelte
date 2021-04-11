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

	const OLD_KEY = "SPIRIT_ISLANDER_CONFIG";
	const NEW_KEY = "SPIRIT_ISLANDER_CONFIG_NEW";

	onMount(() => {
		/*
			A recent breaking change to the app can cause the app to not work
			if the user had a cached config in local storage. For now, I'm saving
			the config under a different key and will eventually move it back to the
			preferred key of "SPIRIT_ISLANDER_CONFIG"
		*/
		if (localStorage.getItem(OLD_KEY)) {
			localStorage.removeItem(OLD_KEY);
		}

		const configJSON = localStorage.getItem(NEW_KEY);
		if (configJSON) {
			config = JSON.parse(configJSON);
		}
	});

	function setConfigInLocalStorage(config: IConfig): void {
		const configJSON = JSON.stringify(config);
		localStorage.setItem(NEW_KEY, configJSON);
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
