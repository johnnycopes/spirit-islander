<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import Emblem from "../components/shared/Emblem.svelte";
</script>

<Meta
	title="Shared/Emblem"
	component={Emblem}
	argTypes={{
		slot: { control: "text" },
		name: { control: "string" },
	}}
/>

<Template let:args>
	<Emblem
		{...args}
		on:clicked={args.onClick}
	>
		{args.slot}
	</Emblem>
</Template>

<Story
	name="Base"
	args={{
		slot: "+1",
		name: "base",
	}}
/>

