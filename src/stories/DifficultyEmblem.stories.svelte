<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import DifficultyEmblem from "../components/shared/DifficultyEmblem.svelte";
</script>

<Meta
  title="Shared/DifficultyEmblem"
  component={DifficultyEmblem}
  argTypes={{
    value: { control: "text" },
  }}
/>

<Template let:args>
  <DifficultyEmblem
    {...args}
  ></DifficultyEmblem>
</Template>

<Story
  name="Base"
  args={{
    value: "1",
  }}
/>

