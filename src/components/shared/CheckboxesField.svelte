<script type="ts">
	import Checkbox from "./Checkbox.svelte"
	import Checkboxes from "./Checkboxes.svelte";

	export let title: string;
	export let items: any[];
	export let model: string[];
	export let getId: (item: any) => string;
	export let getDisabled: (item?: any) => boolean = () => false;
	export let getChildren: (item?: any) => any[] = () => [];

	$: validItems = items.filter(item => !getDisabled(item));
	// Filter out disabled items from the model
	// $: {
	// 	model = model.filter(modelValue => {
	// 		const modelValueValid = validItems.find(item => getId(item) === modelValue);
	// 		return modelValueValid;
	// 	});
	// }

	function toggleAll(): void {
		if (model.length < validItems.length) {
			console.log(validItems);
			model = validItems.map(item => getId(item));
		} else {
			model = [];
		}
	}

</script>

<p class="header">
	<Checkbox
		id={title}
		indeterminate={!!model.length && model.length !== validItems.length}
		checked={!!model.length && model.length === validItems.length}
		disabled={!validItems.length}
		on:change={toggleAll}
	>
		{title}
	</Checkbox>
</p>

<Checkboxes
	{items}
	{getId}
	{getDisabled}
	{getChildren}
	{model}
	on:change={e => model = e.detail}
	let:item
>
	<slot {item}></slot>
</Checkboxes>

<style>
	.header {
		margin-bottom: 8px;
		padding-bottom: 4px;
		border-bottom: 1px solid darkgray;
	}

	.header :global(.checkbox-label) {
		font-weight: 700;
	}
</style>