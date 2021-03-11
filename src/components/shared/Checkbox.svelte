<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { snakeCase } from "@functions/utility/snake-case";

	export let id: string;
	export let checked: boolean = false;
	export let indeterminate: boolean = false;
	export let disabled: boolean = false;
	const dispatcher = createEventDispatcher<{
		change: boolean;
	}>();
</script>

<input id={snakeCase(id)}
	type="checkbox"
	bind:checked={checked}
	{indeterminate}
	{disabled}
	on:change={_ => dispatcher("change", checked)}
/>
<label for={snakeCase(id)}
	class="checkbox-label"
	class:checkbox-label--disabled={disabled}
>
	<slot></slot>
</label>

<style>
	:global(.checkbox-label--disabled) {
		font-style: italic;
		color: darkgray;
	}
</style>