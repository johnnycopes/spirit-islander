<script type="ts">
	import { snakeCase } from "@utility/snake-case";

	export let name: string;
	export let items: {
		name: string;
		disabled?: boolean;
	}[];
	export let group: unknown[];

</script>

<ul>
	<li>
		{name}
	</li>
	{#each items as { name, disabled }}
		<li>
			<input id={snakeCase(name)}
				type="checkbox"
				{disabled}
				value={name}
				bind:group={group}
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

	.disabled {
		font-style: italic;
		color: darkgray;
	}
</style>