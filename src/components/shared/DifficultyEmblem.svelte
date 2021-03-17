<script lang="ts">
	import Emblem from "./Emblem.svelte";
	export let value: number;
</script>

{#if value > 0}
	<Emblem name="difficulty">
		+<span class="value">{value}</span>
	</Emblem>
{/if}

<style lang="scss">
	:global(.difficulty-emblem.emblem) {
		background: var(--gray-300);
	}

	.value {
		display: inline-block;
		margin-left: 2px;
	}
</style>