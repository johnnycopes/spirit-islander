<script type="ts">
	import Checkbox from "./Checkbox.svelte"

	export let title: string;
	export let items: unknown[];
	export let model: string[];
</script>

<div class="checkboxes-field-header">
	<Checkbox
		indeterminate={!!model.length && model.length !== items.length}
		checked={!!model.length && model.length === items.length}
		disabled={!items.length}
		value={title}
		on:change
	>
		{title}
	</Checkbox>
</div>

<slot></slot>

<style>
	.checkboxes-field-header {
		margin-bottom: 8px;
		padding-bottom: 4px;
		border-bottom: 1px solid darkgray;
	}

	.checkboxes-field-header :global(.checkbox-label) {
		font-weight: 700;
	}
</style>