import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: "text" },
    backgroundColor: { control: "color" },
    className: { control: "text" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  label: "Button",
  backgroundColor: "#0a96fc",
  className: "",
};

export const ButtonWithBorder = Template.bind({});
ButtonWithBorder.args = {
  ...Default.args,
  border: false,
  borderColor: "#000",
  borderWidth: 1,
  borderRadius: 12,
};
