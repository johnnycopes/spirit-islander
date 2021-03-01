<script type="ts">
	import { snakeCase } from "@functions/snake-case";

	export let title: string;
	export let items: {
		value: string;
		display: string;
		disabled?: boolean;
	}[];
	export let model: string[];
	$: validItems = items.filter(item => !item.disabled);

	// Filter out disabled items from the model
	$: {
		model = model.filter(modelItem => {
			const modelItemValid = validItems.find(validItem => validItem.value === modelItem);
			return modelItemValid;
		});
	}

	function toggleAll(): void {
		if (model.length < validItems.length) {
			model = validItems.map(item => item.value);
		} else {
			model = [];
		}
	}
</script>

<ul>
	<li class="header">
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
	</li>
	{#each items as { value, display, disabled }}
		<li>
			<input id={snakeCase(value)}
				type="checkbox"
				{value}
				{disabled}
				bind:group={model}
			/>
			<label for={snakeCase(value)}
				class:disabled={disabled}
			>
				{display}
			</label>
		</li>
	{/each}
</ul>

<style>
	li {
		margin-bottom: 4px;
	}

	.header {
		font-weight: bold;
		border-bottom: 1px solid darkgray;
		padding-bottom: 4px;
		margin-bottom: 8px;
	}

	.disabled {
		font-style: italic;
		color: darkgray;
	}
</style>