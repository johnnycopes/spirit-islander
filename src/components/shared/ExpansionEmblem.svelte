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
		background: #767676;
		text-transform: uppercase;
		border-radius: 4px;
	}
</style>