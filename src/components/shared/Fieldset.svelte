<script lang="ts">
	export let name: string = "";
	export let description: string = "";

	$: className = name.toLowerCase();
</script>

<div class="legend">
	<h2 class="legend__header">
		{name}
	</h2>
	<p class="legend__description">
		{description}
	</p>
</div>
<div class="form-fieldset {className}">
	<slot></slot>
</div>

<style>
	:global(.form-fieldset) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
		gap: 8px;
		margin-bottom: 48px;
	}

	.legend {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>