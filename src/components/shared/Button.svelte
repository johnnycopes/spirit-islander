<script lang="ts">
	import { createEventDispatcher } from "svelte";
	
	export let disabled: boolean = false;
	const dispatcher = createEventDispatcher<{ clicked: void; }>();
</script>

<button class="button"
	{disabled}
	type="button"
	on:click={() => dispatcher("clicked")}
>
	<slot></slot>
</button>

<style lang="scss">
	:global(.button) {
		position: relative;
		height: 48px;
		width: 128px;
		background: var(--blue-200);
		color: var(--white);
		border: 0;
		border-radius: var(--border-radius);
		box-shadow: inset 0 1px 0 var(--blue-300), var(--downward-box-shadow);
		font-family: var(--font);
		font-size: 16px;
		font-weight: 700;
		outline: none;
		cursor: pointer;
		transition: 75ms background ease-in-out;

		&:hover,
		&:focus {
			background: var(--blue-100);
			box-shadow: inset 0 1px 0 var(--blue-200), var(--downward-box-shadow);
		}

		&:disabled {
			background: var(--gray-400);
			color: var(--gray-600);
			box-shadow: inset 0 1px 0 var(--gray-500), var(--downward-box-shadow);
			cursor: default;
		}

		@media screen and (min-width: 768px) {
			height: 64px;
			width: 192px;
			font-size: 20px;
		}
	}
</style>