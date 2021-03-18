<script type="ts">
	export let name: string;
</script>

<div class="card {name}"
	style="grid-area: {name}"
>
	<slot></slot>
</div>

<style lang="scss">
	:global(.card) {
		display: flex;
		flex-direction: column;
		background: var(--gray-200);
		border-radius: var(--border-radius);
	}

	:global(.card-header) {
		padding: 8px 16px;
		background: var(--gray-300);
		border-radius: var(--border-radius) var(--border-radius) 0 0;
		font-weight: 700;
	}
</style>