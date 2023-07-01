/// <reference types="react" />
import { DivProps } from "react-html-props";
type ErrorExtendedProps = {
    children?: string;
    className?: string;
} & DivProps;
export declare const ErrorMsg: (props: ErrorExtendedProps) => JSX.Element;
export {};
