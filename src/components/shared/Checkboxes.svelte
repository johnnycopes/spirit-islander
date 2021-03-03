<script type="ts">
	import Checkbox from "./Checkbox.svelte"
	import CheckboxesField from "./CheckboxesField.svelte";

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

<CheckboxesField
	{title}
	{model}
	items={validItems}
	on:change={toggleAll}
>
	<ul>
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
</CheckboxesField>

<style>
	li {
		margin-bottom: 4px;
	}
</style>