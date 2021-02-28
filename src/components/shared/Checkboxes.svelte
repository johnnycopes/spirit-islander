<script type="ts">
	import { snakeCase } from "@utility/snake-case";

	export let title: string;
	export let items: {
		name: string;
		disabled?: boolean;
	}[];
	export let model: unknown[];
	$: validItems = items.filter(item => !item.disabled);

	// Filter out disabled items from the model
	$: {
		model = model.filter(modelItem => {
			const modelItemValid = validItems.find(validItem => validItem.name === modelItem);
			return modelItemValid;
		});
	}

	function toggleAll(): void {
		if (model.length < validItems.length) {
			model = validItems.map(item => item.name);
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
	{#each items as { name, disabled }}
		<li>
			<input id={snakeCase(name)}
				type="checkbox"
				{disabled}
				value={name}
				bind:group={model}
			/>
			<label for={snakeCase(name)}
				class:disabled={disabled}
			>
				{name}
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