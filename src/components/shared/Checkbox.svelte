<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { snakeCase } from "@functions/utility/snake-case";

	export let id: string;
	export let checked: boolean = false;
	export let indeterminate: boolean = false;
	export let disabled: boolean = false;
	const dispatcher = createEventDispatcher<{
		target: string;
		change: boolean;
	}>();
</script>

<label class="container"
	for={snakeCase(id)}
>
	<input id={snakeCase(id)}
		type="checkbox"
		bind:checked={checked}
		{indeterminate}
		{disabled}
		on:change={_ => {
			dispatcher("change", checked);
			dispatcher("target", id);
		}}
	/>
	<div class="checkbox"></div>
	<div class="checkbox-label"
		class:checkbox-label--disabled={disabled}
	>
		<slot></slot>
	</div>
</label>

<style lang="scss">

	:global(.checkbox-label) {
		display: inline-flex;
		align-items: center;
		margin-left: 12px;
	}
	
	:global(.checkbox-label--disabled) {
		font-style: italic;
		color: var(--gray-600);
	}

	.container {
		display: flex;
		align-items: center;
		position: relative;

		&:hover .checkbox {
			background: var(--gray-400);
		}
	}

	.checkbox {
		position: relative;
		height: 14px;
		width: 14px;
		background: var(--gray-500);
		border-radius: var(--border-radius);

		// Default checkmark (unchecked)
		&::after {
			content: "";	
			position: absolute;
			display: none;
		}
	}

	// Hide the default checkbox input
	input {
		position: absolute;
		margin: 0;
		opacity: 0;
	}

	input:focus ~ .checkbox {
		background: var(--gray-400);
	}

	// Checkmark (indeterminate)
	input:indeterminate ~ .checkbox::after {
		display: block;
		left: 50%;
		top: 50%;
		width: 8px;
		transform: translate(-50%, -50%);
		border-top: 2px solid var(--white)
	}

	// Checkmark (checked)
	input:checked ~ .checkbox::after {
		display: block;
    top: 1px;
    left: 4px;
    width: 6px;
    height: 10px;
    border: solid var(--white);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
	}
</style>