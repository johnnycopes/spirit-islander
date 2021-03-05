<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Checkbox from "./Checkbox.svelte";
	import { getItemsRecursively } from "@functions/get-values-recursively";

	export let level: number = 1; // for debugging; remove later
	export let items: any[];
	export let model: string[];
	export let getId: (item: any) => string;
	export let getDisabled: (item?: any) => boolean = () => false;
	export let getChildren: (item?: any) => any[] = () => [];
	const dispatcher = createEventDispatcher<{
		change: string[];
	}>();

	$: validItems = items
			.flatMap(item => getItemsRecursively(item, getChildren))
			.filter(item => !getDisabled(item));

	function calculateChecked(item: any, model: string[]): boolean {
		// const children = getChildren(item);
		// if (children?.length) {
		// 	const validChildrenIds = getValidIds(children);
		// 	return validChildrenIds.every(validId => model.includes(validId));
		// } else {
		// 	return model.includes(getId(item));
		// }
		return model.includes(getId(item));
	}

	function calculateIndeterminate(item: any, model: string[]): boolean | undefined {
		const children = getChildren(item);
		if (children?.length) {
			const validChildrenIds = getValidIds(children);
			const validChildrenSelected = validChildrenIds.reduce((accum, childId) => {
				if (model.includes(childId)) {
					return accum + 1;
				}
				return accum;
			}, 0);
			return validChildrenSelected > 0 && validChildrenSelected < validChildrenIds.length;
		}
	}

	function onChange(checked: boolean, item: any): void {
		console.log(checked, item);
		const items = getItemsRecursively(item, getChildren);
		const ids: string[] = getValidIds(items);
		if (checked) {
			dispatcher("change", [...model, ...ids]);
		} else {
			dispatcher("change", model.filter(
				modelValue => !ids.includes(modelValue)
			));
		}
	}

	function onChildChange(model: string[], parent: any) {
		// console.log(model, parent);
		// const checked = !!model.length;
		// const parentId = getId(parent);
		// onChange(checked, parent);
		// if (checked) {
		// 	dispatcher("change", [...model, parentId]);
		// } else {
		// 	dispatcher("change", model.filter(
		// 		modelValue => modelValue !== parentId
		// 	));
		// }
	}

	function getValidIds(items: any[]): string[] {
		return items
			.filter(item => !getDisabled(item))
			.map(item => getId(item));
	}
</script>

<ul class="checkboxes">
	{#each items as item}
		<li class="checkboxes__item">
			<Checkbox
				id={getId(item)}
				checked={model.includes(getId(item))}
				indeterminate={calculateIndeterminate(item, model)}
				disabled={getDisabled(item)}
				on:change={e => onChange(e.detail, item)}
			>
				<slot {item}></slot>
			</Checkbox>
			{#if getChildren(item)?.length}
				<svelte:self
					level={level + 1}
					items={getChildren(item)}
					{getId}
					{getDisabled}
					{getChildren}
					{model}
					on:change
					let:item
					>
					<!-- on:change={e => onChildChange(e.detail, item)} -->
					<slot {item}></slot>
				</svelte:self>
			{/if}
		</li>
	{/each}
	L{level}: {model}
</ul>

<style>
	li {
		margin-bottom: 4px;
	}
</style>