<script lang="ts">
	import Emblem from "./Emblem.svelte";
	import type { BalancedBoardName, Board, ThematicBoardName } from "@models/game/board";
	import type { MapName } from "@models/game/maps";
	import { snakeCase } from "@functions/utility/snake-case";

	export let board: Board;
	export let mapName: MapName;
	let boardName: BalancedBoardName | string;

	$: map = snakeCase(mapName);
	$: {
		if (mapName === "Balanced") {
			boardName = board.name;
		} else if (mapName === "Thematic") {
			boardName = getAbbreviation(board.thematicName);
		}
	}

	function getAbbreviation(name: ThematicBoardName): string {
		switch (name) {
			case "East":
				return "E";
			case "Northeast":
				return "NE";
			case "Northwest":
				return "NW";
			case "Southeast":
				return "SE";
			case "Southwest":
				return "SW";
			case "West":
				return "W";
		}
	}
</script>

<Emblem name="{map}-board board">
	{boardName}
</Emblem>

<style lang="scss">
	:global(.balanced-board.emblem) {
		background: var(--purple-100);
		color: var(--gray-100);
	}

	:global(.thematic-board.emblem) {
		background: var(--brown-100);
		color: var(--white);
	}
</style>