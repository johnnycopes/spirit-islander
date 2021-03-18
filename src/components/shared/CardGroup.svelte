<script lang="ts">
	import { snakeCase } from "@functions/utility/snake-case";

	export let name: string;
	export let description: string;

	$: className = snakeCase(name);
</script>

<div class="legend">
	<h2 class="legend__header">
		{name}
	</h2>
	<p class="legend__description">
		{description}
	</p>
</div>
<div class="card-group {className}">
	<slot></slot>
</div>

<style style="scss">
	.legend {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-bottom: 16px;
	}

	:global(.card-group) {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: auto;
		gap: 8px;
		margin-bottom: 48px;
	}
</style>