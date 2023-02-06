import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Navbar } from "./Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    title: { control: "text" },
    links: { control: "array" },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;
export const Default = Template.bind({});

Default.args = {
  title: "Title",
  links: [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
  ] as { name: string; href: string }[],
};
