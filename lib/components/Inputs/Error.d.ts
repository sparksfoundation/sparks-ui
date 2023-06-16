import React from "react";
import { DivProps } from "react-html-props";
type ErrorExtendedProps = {
    children?: string;
    className?: string;
} & DivProps;
export declare const Error: ({ children, className, ...props }: ErrorExtendedProps) => React.JSX.Element;
export {};
