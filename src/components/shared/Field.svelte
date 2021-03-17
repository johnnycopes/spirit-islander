<script type="ts">
	export let name: string | undefined;
	export let error: boolean = false;
	export let errorMessage: string = "";
</script>

<div class="field {name}"
	style="grid-area: {name}"
>
	<slot></slot>

	{#if error}
		<p class="field-error">
			{errorMessage}
		</p>
	{/if}
</div>

<style lang="scss">
	:global(.field) {
		display: flex;
		flex-direction: column;
		background: var(--gray-200);
		border-radius: var(--border-radius);
	}

	:global(.field-header) {
		padding: 8px 16px;
		background: var(--gray-300);
		border-radius: var(--border-radius) var(--border-radius) 0 0;
		font-weight: 700;
	}

	:global(.field-error) {
		display: inline-block;
		align-self: flex-start;
		margin: 4px 16px 16px;
		padding: 8px 16px;
		background: var(--red-200);
		color: var(--red-100);
		font-weight: bold;
		font-size: 16px;
	}
</style>