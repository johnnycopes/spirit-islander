<script type="ts">
	import { snakeCase } from "@functions/utility/snake-case";

	export let label: string;
	export let options: unknown[];
	export let value: unknown;
	$: id = snakeCase(label);
</script>

<div class="field-header">
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
		margin: 16px;
		padding: 8px;
		font-family: var(--font);
		font-size: 20px;
		border: 0;
	}	
</style>