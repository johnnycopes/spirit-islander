<script type="ts">
	import { snakeCase } from "@functions/utility/snake-case";

	export let label: string;
	export let options: unknown[];
	export let value: unknown;
	$: id = snakeCase(label);
</script>

<!-- Expose the id so consumers can set up their own custom <label> -->
<slot {id}></slot>

<!-- Wrapper div gives consumers the opportunity to adjust menu container styling -->
<div class="select">
	<select
		{id}
		bind:value={value}
	>
		{#each options as option}
			<option value={option}>
				{option}
			</option>
		{/each}
	</select>
</div>

<style lang="scss">
	select {
		width: 64px;
		padding: 8px;
		font-size: 16px;
		font-family: var(--font);
		border: 0;
		border-radius: var(--border-radius);

		@media screen and (min-width: 768px) {
			font-size: 20px;
		}
	}
</style>