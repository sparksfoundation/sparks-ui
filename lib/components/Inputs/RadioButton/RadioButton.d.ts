import { ChangeEventHandler } from 'react';
import { FieldValues, UseFormSetValue } from 'react-hook-form';
type RadioButtonProps = {
    id: string;
    label: string;
    value: string;
    checked: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
    setValue?: UseFormSetValue<FieldValues>;
    name?: string;
};
export declare const RadioButton: (props: RadioButtonProps) => JSX.Element;
export {};
