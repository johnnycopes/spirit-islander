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

<style lang="scss">
	.legend {
		display: flex;
		flex-direction: column;
		margin-bottom: 16px;
		@media screen and (min-width: 768px) {
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-end;
		}

		&__header {
			margin-bottom: 8px;
			font-weight: 700;

			@media screen and (min-width: 768px) {
				margin: 0;
			}
		}
	}

	:global(.card-group) {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: auto;
		gap: 8px;
	}
</style>