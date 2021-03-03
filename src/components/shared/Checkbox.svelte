<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { snakeCase } from "@functions/snake-case";

	export let value: string;
	export let checked: boolean = false;
	export let indeterminate: boolean = false;
	export let disabled: boolean = false;
	const dispatcher = createEventDispatcher<{
		change: boolean;
	}>();
</script>

<input id={snakeCase(value)}
	type="checkbox"
	bind:checked={checked}
	{indeterminate}
	{disabled}
	{value}
	on:change={_ => dispatcher("change", checked)}
/>
<label for={snakeCase(value)}
	class:disabled={disabled}
>
	<slot></slot>
</label>

<style>
	:global(.disabled) {
		font-style: italic;
		color: darkgray;
	}
</style>