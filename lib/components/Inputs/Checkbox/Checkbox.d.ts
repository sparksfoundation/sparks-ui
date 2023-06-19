import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { InputProps } from "react-html-props";
type CheckboxExtendedProps = {
    id: string;
    className?: string;
    disabled?: boolean;
    registration?: Partial<UseFormRegisterReturn>;
} & InputProps;
export declare const Checkbox: (props: CheckboxExtendedProps) => React.JSX.Element;
export {};
