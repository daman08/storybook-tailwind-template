import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    border: { control: "boolean" },
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Label",
  placeholder: "Placeholder",
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  placeholder: "Placeholder",
  border: true,
  value: "Value",
  onChange: () => console.log("onChange"),
  backgroundColor: "#f7f7f7",
};
