<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import ExpansionEmblem from "./ExpansionEmblem.svelte";
</script>

<Meta
  title="Shared/ExpansionEmblem"
  component={ExpansionEmblem}
  argTypes={{
    value: { control: "text" },
  }}
/>

<Template let:args>
  <ExpansionEmblem
    {...args}
  ></ExpansionEmblem>
</Template>

<Story
  name="Branch & Claw"
  args={{
    value: "Branch & Claw",
  }}
/>

<Story
  name="Jagged Earth"
  args={{
    value: "Jagged Earth",
  }}
/>

<Story
  name="Promo Pack 1"
  args={{
    value: "Promo Pack 1",
  }}
/>

<Story
  name="Promo Pack 2"
  args={{
    value: "Promo Pack 2",
  }}
/>

<Story
  name="Invalid"
  args={{
    value: "Fake Expansion",
  }}
/>
