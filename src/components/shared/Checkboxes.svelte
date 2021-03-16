<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Checkbox from "./Checkbox.svelte";
	import { cleanArray } from "@functions/utility/clean-array";
	import { getItemsRecursively } from "@functions/utility/get-items-recursively";

	export let items: any[];
	export let model: string[];
	export let level: number = 1;
	export let getId: (item: any) => string = (item) => item;
	export let getDisabled: (item?: any) => boolean = () => false;
	export let getChildren: (item?: any) => any[] = () => [];
	const dispatcher = createEventDispatcher<{
		change: string[];
	}>();

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
		const items = getItemsRecursively(item, getChildren);
		const ids: string[] = getValidIds(items);
		let updatedModel: string[];

		if (checked) {
			updatedModel = [...model, ...ids];
		} else {
			updatedModel = model.filter(modelValue => !ids.includes(modelValue));
		}
		dispatcher("change", cleanArray(updatedModel));
	}

	function onChildrenChange(model: string[], parent: any) {
		const children = getChildren(parent);
		const ids: string[] = getValidIds(children);
		const parentId = getId(parent);
		let updatedModel: string[];

		if (ids.every(id => model.includes(id))) {
			updatedModel = [...model, parentId];
		} else {
			updatedModel = model.filter(modelValue => modelValue !== parentId);
		}
		dispatcher("change", cleanArray(updatedModel));
	}

	function getValidIds(items: any[]): string[] {
		return items
			.filter(item => !getDisabled(item))
			.map(item => getId(item));
	}
</script>

<ul class="checkboxes checkboxes-level-{level}"
	style="margin-left: {(level -1) * 8}px"
>
	{#each items as item}
		<li class="checkboxes-item checkbox-item-level-{level}">
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
					items={getChildren(item)}
					level={level + 1}
					{getId}
					{getDisabled}
					{getChildren}
					{model}
					on:change={e => onChildrenChange(e.detail, item)}
					let:item
					>
					<slot {item}></slot>
				</svelte:self>
			{/if}
		</li>
	{/each}
</ul>

<style lang="scss">
	.checkboxes {
		padding: 8px 16px;
	}
	
	.checkboxes-item {
		margin-bottom: 4px;
	}
</style>