import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip as TooltipComponent } from "./Tooltip";
import { Button } from "../Button";

const meta: Meta = {
  title: "Components/Tooltip",
  component: TooltipComponent,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof TooltipComponent>;
export const TooltipStory: Story = {
  args: {
    children: <Button>Hover over me!</Button>,
    tooltipId: 'tooltip-id',
    tooltipContent: 'Hello world',
  },
};
