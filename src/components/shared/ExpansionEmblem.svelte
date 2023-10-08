<script lang="ts">
	import Emblem from "./Emblem.svelte";
	import type { ExpansionName } from "@models/game/expansions";

	export let value: ExpansionName | undefined;
	$: abbrevation = getAbbreviation(value);

	function getAbbreviation(name: ExpansionName | undefined): string | undefined {
		switch (name) {
			case "Branch & Claw":
				return "BC";
			case "Horizons":
				return "H";
			case "Jagged Earth":
				return "JE";
			case "Promo Pack 1":
				return "P1";
			case "Promo Pack 2":
				return "P2";
			case "Nature Incarnate":
				return "NI";
			default:
				return undefined;
		}
	}
</script>

{#if value && abbrevation}
	<Emblem name={abbrevation}>
		{abbrevation}
	</Emblem>
{/if}

<style lang="scss">
	:global(.BC-emblem.emblem) {
		background: var(--yellow-100);
		color: var(--gray-100);
	}

	:global(.H-emblem.emblem) {
		background: var(--orange-100);
		color: var(--gray-100);
	}

	:global(.JE-emblem.emblem) {
		background: var(--green-100);
		color: var(--gray-100);
	}

	:global(.NI-emblem.emblem) {
		background: var(--red-200);
		color: var(--gray-100);
	}

	:global(.P1-emblem.emblem),
	:global(.P2-emblem.emblem) {
		background: var(--white);
		color: var(--gray-100);
	}
</style>
