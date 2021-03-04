<script lang="ts">
	import Checkbox from "./Checkbox.svelte";
	import { getValuesRecursively } from "@functions/get-values-recursively";

	export let level: number = 1; // for debugging; remove later
	export let items: any[];
	export let model: string[];
	export let getId: (item: any) => string;
	export let getDisabled: (item?: any) => boolean = () => false;
	export let getChildren: (item?: any) => any[] = () => [];

	function toggle(checked: boolean, item: any): void {
		const ids: string[] = getValuesRecursively(item, getId, getChildren);
		// const idContainer = [];
		// const itemsToCheck = [item];
		// while (itemsToCheck.length) {
		// 	let currentItem = itemsToCheck.shift();
		// 	let id = getId(currentItem);
		// 	let children = getChildren(currentItem);

		// 	idContainer.push(id);
		// 	if (children?.length) {
		// 		itemsToCheck.push(...children)
		// 	}
		// }

		if (checked) {
			model = [...model, ...ids];
		} else {
			model = model.filter(modelValue => !ids.includes(modelValue));
		}
	}
</script>

<ul class="checkboxes">
	{#each items as item}
		<li class="checkboxes__item">
			<Checkbox
				id={getId(item)}
				checked={model.some(modelValue => modelValue === getId(item))}
				disabled={getDisabled(item)}
				on:change={e => toggle(e.detail, item)}
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
					on:change={e => toggle(e.detail, item)}
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