<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Checkbox from "@shared/Checkbox.svelte";
	import type { CheckboxModel } from "./checkbox-model.type"
	
	export let items: {
		value: string;
		disabled?: boolean;
	}[];
	export let model: Record<string, CheckboxModel>;
	const dispatcher = createEventDispatcher<{
		change: Record<string, CheckboxModel>;
	}>();
</script>

<ul>
	<!-- <li class="header">
		<input id={snakeCase(title)}
			type="checkbox"
			indeterminate={!!model.length && model.length !== validItems.length}
			checked={!!model.length && model.length === validItems.length}
			disabled={!validItems.length}
			on:change={toggleAll}
		/>
		<label for={snakeCase(title)}>
			{title}:
		</label>
	</li> -->
	{#each items as { value, disabled }}
		<li>
			<Checkbox
				id={value}
				{disabled}
				model={model[value]}
				on:change={e => {
					dispatcher("change", {...model, [value]: e.detail});
				}}
			>
				<slot {value}></slot>
			</Checkbox>
		</li>
	{/each}
</ul>

<style>

</style>