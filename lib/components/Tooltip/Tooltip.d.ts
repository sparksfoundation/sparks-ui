import React from 'react';
import { DivProps } from 'react-html-props';
type TooltipProps = {
    place?: 'top' | 'right' | 'bottom' | 'left';
    children: React.ReactElement;
    tooltipId: string;
    tooltipContent: string;
} & DivProps;
export declare const Tooltip: (props: TooltipProps) => React.JSX.Element;
export {};
