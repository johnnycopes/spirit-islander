<script lang="ts">
	import type { AdversaryName } from "../models/game/adversaries";
	import type { Difficulty } from "../models/game/difficulty";
	import type { MapName } from "../models/game/maps";
	import type { ScenarioName } from "../models/game/scenarios";
	import type { SpiritName } from "../models/game/spirits";

	export let players: 1 | 2 | 3 | 4;
	export let difficulty: Difficulty;
	export let spirits: SpiritName[];
	export let adversaries: AdversaryName[];
	export let scenarios: ScenarioName[];
	export let maps: MapName[];
</script>

{players}<br>

{difficulty}<br>

{spirits}<br>

{adversaries}<br>

{scenarios}<br>

{maps}<br>

<style>
	
</style>
