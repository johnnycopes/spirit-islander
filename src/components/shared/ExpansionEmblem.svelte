<script lang="ts">
	import type { ExpansionName } from "@models/game/expansions";

	export let value: ExpansionName;
	$: abbrevation = getAbbreviation(value);

	function getAbbreviation(name: ExpansionName): string {
		switch (name) {
			case "Branch & Claw":
				return "BC";
			case "Jagged Earth":
				return "JE";
		}
	}
</script>

<div class="complexity-emblem">
	{abbrevation}
</div>

<style>
	:global(.complexity-emblem) {
		padding: 2px 8px;
		font-size: 14px;
		background: #767676;
		text-transform: uppercase;
		border-radius: 4px;
	}
</style>