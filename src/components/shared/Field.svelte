<script type="ts">
	export let name: string | undefined;
	export let error: boolean = false;
	export let errorMessage: string = "";
</script>

<div class="form-field {name}"
	style="grid-area: {name}"
>
	<slot></slot>

	{#if error}
		<p class="error">
			{errorMessage}
		</p>
	{/if}
</div>

<style lang="scss">
	:global(.form-field) {
		padding: 16px;;
		background: var(--black-200);
	}

	.error {
		display: inline-block;
		margin-top: 8px;
		padding: 8px 16px;
		background: var(--red-200);
		color: var(--red-100);
		font-weight: bold;
		font-size: 16px;
	}
</style>