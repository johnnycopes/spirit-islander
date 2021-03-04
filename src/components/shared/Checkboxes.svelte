<script lang="ts">
	import Checkbox from "./Checkbox.svelte";

	export let level: number = 1; // for debugging; remove later
	export let items: any[];
	export let model: string[];
	export let getId: (item: any) => string;
	export let getDisabled: (item?: any) => boolean = () => false;
	export let getChildren: (item?: any) => any[] = () => [];
	
	function toggle(checked: boolean, item: any): void {
		const id = getId(item);
		const children = getChildren(item);
		if (checked) {
			model = [...model, id];
			console.log(id, children);
		} else {
			model = model.filter(item => item !== id);
		}

		if (children) {
			const childrenIds = children.map(child => getId(child));
			if (checked) {
				// TODO: recurisvely build/filter model. Also need to implement this in CheckboxesField component, so extracting
				// it as a utility function eventually would make sense
				model = [...model, ...childrenIds];
			} else {
				model = model.filter(item => !childrenIds.includes(item));
			}
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