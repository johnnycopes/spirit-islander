<script lang="ts">
	export let value: number;
</script>

{#if value > 0}
	<div class="difficulty-emblem">
		+<span class="value">{value}</span>
	</div>
{/if}

<style lang="scss">
	:global(.difficulty-emblem) {
		padding: 2px 8px;
		font-size: 14px;
		background: var(--black-300);
		border-radius: 4px;
		font-weight: 700;
	}

	.value {
		display: inline-block;
		margin-left: 2px;
	}
</style>