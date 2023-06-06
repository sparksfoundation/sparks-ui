/// <reference types="react" />
import { UseFormRegisterReturn } from "react-hook-form";
import { InputProps } from "react-html-props";
type CheckboxExtendedProps = {
    registration?: Partial<UseFormRegisterReturn>;
    disabled?: boolean;
    className?: string;
} & InputProps;
export declare const Checkbox: (props: CheckboxExtendedProps) => JSX.Element;
export {};
