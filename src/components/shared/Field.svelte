<script type="ts">
	import Card from "./Card.svelte";

	export let name: string;
	export let error: boolean = false;
	export let errorMessage: string = "";
</script>

<Card name={name}>
	<slot></slot>

	{#if error}
		<p class="field-error">
			{errorMessage}
		</p>
	{/if}
</Card>

<style lang="scss">
	:global(.field-error) {
		display: inline-block;
		align-self: flex-start;
		margin: 4px 16px 16px;
		padding: 8px 16px;
		background: var(--red-200);
		color: var(--red-100);
		border-radius: var(--border-radius);
		font-weight: bold;
		font-size: 16px;
	}
</style>