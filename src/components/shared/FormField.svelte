<script type="ts">
	export let header: string = "";
	export let error: boolean = false;
	export let errorMessage: string = "";
</script>

<div class="form-field">
	{#if header}
		<p class="form-field__header">
			{header}:
		</p>
	{/if}

	<slot></slot>

	{#if error}
		<p class="error">
			{errorMessage}
		</p>
	{/if}
</div>

<style>
	:global(.form-field) {
		padding: 16px;;
		background: #343c3c;
	}

	:global(.form-field__header) {
		margin-bottom: 8px;
	}

	.error {
		margin-top: 8px;
		padding: 8px;
		background: hsl(3deg 90% 82%);
		color: hsl(3deg 90% 37%);
		font-weight: bold;
		font-size: 16px;
	}
</style>