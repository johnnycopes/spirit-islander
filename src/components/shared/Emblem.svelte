<script lang="ts">
	export let name: string;

	$: className = `${name}-emblem`;
</script>

<div class="emblem {className}">
	<slot></slot>
</div>

<style lang="scss">
	:global(.emblem) {
		display: inline-flex;
		justify-content: center;
		padding: 2px 0;
		width: 30px;
		font-size: 14px;
		background: var(--gray-400);
		border-radius: var(--border-radius);
		font-weight: 700;
	}
</style>