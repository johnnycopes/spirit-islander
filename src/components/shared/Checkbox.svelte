<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import type { CheckboxModel } from "./checkbox-model.type"
	import { snakeCase } from "@functions/snake-case";

	export let id: string;
	export let disabled: boolean = false;
	export let model: CheckboxModel = "unchecked";
	const dispatcher = createEventDispatcher<{
		change: CheckboxModel;
	}>();

</script>

<input id={snakeCase(id)}
	type="checkbox"
	indeterminate={model === "indeterminate"}
	checked={model === "checked"}
	{disabled}
	on:change={() => {
		const updatedModel = model === "checked" ? "unchecked" : "checked";
		dispatcher("change", updatedModel);
	}}
/>
<label for={snakeCase(id)}>
	<slot></slot>
</label>

<style>

</style>