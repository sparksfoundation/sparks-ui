import type { Meta, StoryObj } from "@storybook/react";
import { Textarea as TextareaComponent } from "./Textarea";

const meta: Meta<typeof TextareaComponent> = {
  title: "Components/Textarea",
  component: TextareaComponent,
};

export default meta;

type Story = StoryObj<typeof TextareaComponent>;
export const TextareaStory: Story = {
    args: {
      placeholder: "Placeholder..."
    }
};
