<script lang="ts">
import type { BalancedBoardName, ThematicBoardName } from "@models/game/board";

	import Emblem from "./Emblem.svelte";

	export let value: BalancedBoardName | ThematicBoardName;
</script>

<Emblem name="board">
	{value}
</Emblem>

<style lang="scss">
	:global(.board-emblem.emblem) {
		background: var(--purple-100);
		color: var(--gray-100);
	}
</style>