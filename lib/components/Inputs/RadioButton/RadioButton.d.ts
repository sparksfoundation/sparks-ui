/// <reference types="react" />
import { InputProps } from "react-html-props";
import { UseFormRegisterReturn } from "react-hook-form";
type RadioButtonProps = {
    id: string;
    key?: string;
    className: string;
    disabled: boolean;
    registration?: Partial<UseFormRegisterReturn>;
} & InputProps;
export declare const RadioButton: (props: RadioButtonProps) => JSX.Element;
export {};
