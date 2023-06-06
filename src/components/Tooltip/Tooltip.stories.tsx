import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip as TooltipComponent } from "./Tooltip";
import { Button } from "../Button";

const meta: Meta = {
  title: "Components/Tooltip",
  component: TooltipComponent,
  argTypes: {
    toolTip: { name: 'toolTip', type: { name: 'string' }, defaultValue: "something" }, control: { type: 'string' },
    tooltipContent: { name: 'toolTip', type: { name: 'string' }, defaultValue: "something" }, control: { type: 'string' },
  }
};

export default meta;

type Story = StoryObj<typeof TooltipComponent>;
export const TooltipStory: Story = {
  args: {
    TooltipComponent: Button,
    tooltipId: 'tooltip-id',
    tooltipContent: 'Hello world',
  },
};
