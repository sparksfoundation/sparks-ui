/// <reference types="react" />
import { UseFormRegisterReturn } from "react-hook-form";
import { TextAreaProps } from "react-html-props";
type TextareaExtendedProps = {
    registration?: Partial<UseFormRegisterReturn>;
    disabled?: boolean;
    className?: string;
} & TextAreaProps;
export declare const Textarea: (props: TextareaExtendedProps) => JSX.Element;
export {};
