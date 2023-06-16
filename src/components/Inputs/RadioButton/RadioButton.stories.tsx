import { Meta, StoryObj } from "@storybook/react";
import { RadioButton as RadioButtonComponent } from "./RadioButton";

const meta: Meta<typeof RadioButtonComponent> = {
  title: "Components/RadioButton",
  component: RadioButtonComponent,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof RadioButtonComponent>;
export const RadioButtonStory: Story = {
  args: { id: "option1" },
};
