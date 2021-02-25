<script type="ts">
	export let id: string;
	export let label: string;
	export let options: unknown[];
	export let value: unknown;
</script>

<label for={id}>
	{label}:
</label>
<select
	id={id}
	name="players"
	bind:value={value}
>
	{#each options as option}
		<option value={option}>
			{option}
		</option>
	{/each}
</select>

<style>
	select {
		font-family: var(--font);
		width: 64px;
		padding: 8px;
		font-size: 20px;
	}	
</style>