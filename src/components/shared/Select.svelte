<script type="ts">
	import { snakeCase } from "@functions/utility/snake-case";

	export let label: string;
	export let options: unknown[];
	export let value: unknown;
	$: id = snakeCase(label);
</script>

<label for={id}>
	{label}
</label>
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
	label {
		padding: 8px 16px;
		background: var(--gray-300);
		font-weight: 700;
	}

	select {
		width: 64px;
		margin: 16px;
		padding: 8px;
		font-family: var(--font);
		font-size: 20px;
	}	
</style>