<script type="ts">
	import Checkbox from "./Checkbox.svelte"
	import Checkboxes from "./Checkboxes.svelte";
	import { getItemsRecursively } from "@functions/utility/get-items-recursively";

	export let title: string;
	export let items: any[];
	export let model: string[];
	export let getId: (item: any) => string = (item) => item;
	export let getDisabled: (item?: any) => boolean = () => false;
	export let getChildren: (item?: any) => any[] = () => [];
		
	$: headerChecked = !!model.length && model.length === validIds.length;
	$: headerIndeterminate = !!model.length && model.length < validIds.length;
	$: headerDisabled = !validIds.length;
	$: validIds = items
			.flatMap(group => getItemsRecursively(group, getChildren))
			.filter(item => !getDisabled(item))
			.map(item => getId(item));

	// Filter out disabled items from the model
	$: {
		model = model.filter(modelValue => validIds.includes(modelValue));
	}

	function toggleAll(): void {
		if (headerChecked) {
			model = [];
		} else {
			model = [...validIds];
		}
	}
</script>

<div class="field-header">
	<Checkbox
		id={title}
		checked={headerChecked}
		indeterminate={headerIndeterminate}
		disabled={headerDisabled}
		on:change={toggleAll}
	>
		{title}
	</Checkbox>
</div>

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

<style lang="scss">
	:global(.checkboxes-level-1) {
		padding: 8px 16px;
	}
</style>