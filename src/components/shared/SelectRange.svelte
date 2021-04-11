<script type="ts">
	import { snakeCase } from "@functions/utility/snake-case";
	import Select from "@components/shared/Select.svelte";

	export let label: string;
	export let options: number[];
	export let values: number[];
</script>

<div class="card-header">
	{label}
</div>

<div class="menus">
	<div class="menu min">
		<Select label={`Min-${label}`}
			{options}
			bind:value={values[0]}
			let:id={minId}
		>
			<label for={minId}>
				Min
			</label>
		</Select>
	</div>

	<div class="menu max">
		<Select label={`Max-${label}`}
			{options}
			bind:value={values[1]}
			let:id={maxId}
		>
			<label for={maxId}>
				Max
			</label>
		</Select>
	</div>
</div>

<style lang="scss">
	.menus {
		display: flex;
		align-items: center;
	}

	.menu {
		display: flex;
		align-items: center;
		margin: 16px 8px;

		&:not(:last-of-type) {
			margin-right: 16px;
		}

		@media screen and (min-width: 768px) {
			margin: 16px;
		}

		label {
			margin-right: 8px;
		}
	}
</style>