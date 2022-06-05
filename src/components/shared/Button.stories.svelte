<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Button from "./Button.svelte";
</script>

<Meta
  title="Shared/Button"
  component={Button}
  argTypes={{
    slot: { control: "text" },
    disabled: { control: "boolean" },
    onClick: { action: "onClick" },
  }}
/>

<Template let:args>
  <Button
    {...args}
    on:clicked={args.onClick}
  >
    {args.slot}
  </Button>
</Template>

<Story
  name="Base"
  args={{
    slot: "Click me!",
    disabled: false,
  }}
/>

<Story
  name="Disabled"
  args={{
    slot: "Click me!",
    disabled: true,
  }}
/>
