import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox as CheckboxComponent } from "./Checkbox";

const meta: Meta = {
  title: "Components/Checkbox",
  component: CheckboxComponent,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof CheckboxComponent>;
export const CheckboxStory: Story = {};
