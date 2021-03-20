<script type="ts">
	import { snakeCase } from "@functions/utility/snake-case";

	export let label: string;
	export let options: unknown[];
	export let value: unknown;
	$: id = snakeCase(label);
</script>

<div class="card-header">
	<label for={id}>
		{label}
	</label>
</div>

<select {id}
	name="players"
	bind:value={value}
>
	{#each options as option}
		<option value={option}>
			{option}
		</option>
	{/each}
</select>

<style lang="scss">
	select {
		width: 64px;
		padding: 8px;
		margin: 16px 8px;
		font-size: 16px;
		font-family: var(--font);
		border: 0;
		border-radius: var(--border-radius);

		@media screen and (min-width: 768px) {
			margin: 16px;
			font-size: 20px;
		}
	}
</style>