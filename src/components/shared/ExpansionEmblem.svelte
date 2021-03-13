<script lang="ts">
	import type { ExpansionName } from "@models/game/expansions";

	export let value: ExpansionName | undefined;
	$: abbrevation = getAbbreviation(value);

	function getAbbreviation(name: ExpansionName | undefined): string | undefined {
		switch (name) {
			case "Branch & Claw":
				return "BC";
			case "Jagged Earth":
				return "JE";
			case "Promo Pack 1":
				return "P1";
			case "Promo Pack 2":
				return "P2";
			default:
				return undefined;
		}
	}
</script>

{#if value}
	<div class="expansion-emblem">
		{abbrevation}
	</div>
{/if}

<style>
	:global(.expansion-emblem) {
		padding: 2px 8px;
		font-size: 14px;
		background: var(--black-300);
		text-transform: uppercase;
		border-radius: 4px;
		font-weight: 700;
	}
</style>