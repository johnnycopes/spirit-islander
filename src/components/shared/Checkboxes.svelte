<script type="ts">
	import Checkbox from "./Checkbox.svelte"

	export let title: string;
	export let items: {
		value: string;
		display: string;
		disabled?: boolean;
	}[];
	export let model: string[];
	$: validItems = items.filter(item => !item.disabled);

	// Filter out disabled items from the model
	$: {
		model = model.filter(modelItem => {
			const modelItemValid = validItems.find(validItem => validItem.value === modelItem);
			return modelItemValid;
		});
	}

	function toggle(checked: boolean, value: string): void {
		if (checked) {
			model = [...model, value];
		} else {
			model = model.filter(item => item !== value);
		}
	}

	function toggleAll(): void {
		if (model.length < validItems.length) {
			model = validItems.map(item => item.value);
		} else {
			model = [];
		}
	}
</script>

<ul>
	<li class="header">
		<Checkbox
			indeterminate={!!model.length && model.length !== validItems.length}
			checked={!!model.length && model.length === validItems.length}
			disabled={!validItems.length}
			value={title}
			on:change={toggleAll}
		>
			{title}
		</Checkbox>
	</li>
	{#each items as { value, display, disabled }}
		<li>
			<Checkbox
				checked={model.some(item => item === value)}
				{disabled}
				{value}
				on:change={e => toggle(e.detail, value)}
			>
				{display}
			</Checkbox>
		</li>
	{/each}
</ul>

<style>
	li {
		margin-bottom: 4px;
	}

	.header {
		font-weight: bold;
		border-bottom: 1px solid darkgray;
		padding-bottom: 4px;
		margin-bottom: 8px;
	}
</style>