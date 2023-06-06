import { Meta, StoryObj, } from '@storybook/react';
import { RadioButton as RadioButtonComponent } from "./RadioButton";

const meta: Meta<typeof RadioButtonComponent> = {
  title: "Components/RadioButton",
  component: RadioButtonComponent,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButtonComponent>;
export const RadioButtonStory: Story = {
  args: {
    id: 'option1',
    label: 'Option 1',
    value: 'option1',
    checked: false,
  }
};
