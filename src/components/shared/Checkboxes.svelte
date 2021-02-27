<script type="ts">
	import { snakeCase } from "@utility/snake-case";

	export let items: string[];
	export let group: unknown[];
</script>

<ul>
	{#each items as item}
	<li>
		<input id={snakeCase(item)}
			type="checkbox"
			value={item}
			bind:group={group}
		/>
		<label for={snakeCase(item)}>
			{item}
		</label>
	</li>
	{/each}
</ul>

<style>
	li {
		margin-bottom: 4px;
	}
</style>