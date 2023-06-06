import React from 'react';
import { DivProps } from 'react-html-props';
type NoiseBackgroundProps = {
    shade?: 'light' | 'medium' | 'dark';
} & DivProps;
export declare const NoiseBackground: ({ shade }: NoiseBackgroundProps) => React.JSX.Element;
export {};
