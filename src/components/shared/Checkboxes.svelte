<script type="ts">
	import Checkbox from "./Checkbox.svelte"

	export let title: string;
	export let items: any[];
	export let model: string[];
	export let getValue: (item: any) => string;
	export let getDisabled: (item?: any) => boolean = () => false;

	$: validItems = items.filter(item => !getDisabled(item));
	// Filter out disabled items from the model
	$: {
		model = model.filter(modelValue => {
			const modelValueValid = validItems.find(item => getValue(item) === modelValue);
			return modelValueValid;
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
			model = validItems.map(item => getValue(item));
		} else {
			model = [];
		}
	}
</script>

<ul class="checkboxes">
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
	{#each items as item}
		<li>
			<Checkbox
				checked={model.some(modelValue => modelValue === getValue(item))}
				disabled={getDisabled(item)}
				value={getValue(item)}
				on:change={e => toggle(e.detail, getValue(item))}
			>
				<slot {item}></slot>
			</Checkbox>
		</li>
	{/each}
</ul>

<style>
	.header {
		margin-bottom: 8px;
		padding-bottom: 4px;
		border-bottom: 1px solid darkgray;
	}

	.header :global(.checkbox-label) {
		font-weight: 700;
	}

	li {
		margin-bottom: 4px;
	}
</style>