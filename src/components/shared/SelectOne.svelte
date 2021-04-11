<script type="ts">
	import Select from "@components/shared/Select.svelte";

	export let label: string;
	export let options: unknown[];
	export let value: unknown;
</script>

<div class="select-one">
	<Select {label}
		{options}
		bind:value={value}
		let:id={id}
	>
		<label class="card-header"
			for={id}
		>
			{label}
		</label>
	</Select>
</div>

<style lang="scss">
	.select-one {
		display: flex;
		flex-direction: column;

		:global(.select) {
			margin: 16px 8px;

			@media screen and (min-width: 768px) {
				margin: 16px;
			}
		}
	}
</style>