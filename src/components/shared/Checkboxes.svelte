<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Checkbox from "./Checkbox.svelte";
	import { cleanArray } from "@functions/clean-array";
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
		if (checked) {
			dispatcher("change", cleanArray([...model, ...ids]));
		} else {
			dispatcher("change", model.filter(
				modelValue => !ids.includes(modelValue)
			));
		}
	}

	function onChildrenChange(model: string[], parent: any) {
		const children = getChildren(parent);
		const ids: string[] = getValidIds(children);
		const parentId = getId(parent);

		if (ids.every(id => model.includes(id))) {
			dispatcher("change", cleanArray([...model, parentId]));
		} else if (!ids.some(id => model.includes(id))) {
			dispatcher("change", model.filter(modelValue => modelValue !== parentId));
		} else {
			dispatcher("change", cleanArray(model));
		}
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
					on:change={e => onChildrenChange(e.detail, item)}
					let:item
					>
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