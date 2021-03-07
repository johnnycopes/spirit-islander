<script lang="ts">
	export let value: string;

	$: valueAsNumber = parseInt(value, 10);
</script>

{#if valueAsNumber > 0}
	<div class="difficulty-emblem">
		+<span class="value">{value}</span>
	</div>
{/if}

<style>
	:global(.difficulty-emblem) {
		padding: 2px 8px;
		font-size: 14px;
		background: #767676;
		border-radius: 4px;
	}

	.value {
		display: inline-block;
		margin-left: 2px;
	}
</style>