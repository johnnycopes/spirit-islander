<script type="ts">
	export let name: string;
	export let error: boolean = false;
	export let errorMessage: string = "";
</script>

<div class="card {name}"
	style="grid-area: {name}"
>
	<slot></slot>

	{#if error}
		<p class="card-error">
			{errorMessage}
		</p>
	{/if}
</div>

<style lang="scss">
	:global(.card) {
		display: flex;
		flex-direction: column;
		background: var(--gray-200);
		border-radius: var(--border-radius);
		box-shadow: var(--downward-box-shadow);

		:global(.emblem) {
			margin-left: 8px;
		}
	}

	:global(.card-header) {
		padding: 8px 16px;
		background: var(--gray-300);
		border-radius: var(--border-radius) var(--border-radius) 0 0;
		box-shadow: inset 0 1px 0 hsl(192, 10%, 35%), var(--downward-box-shadow);
		font-weight: 700;
	}

	:global(.card-error) {
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