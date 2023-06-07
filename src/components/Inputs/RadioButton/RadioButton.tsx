import React, { ChangeEventHandler } from 'react';
import { clsxm } from "../../../common/clsxm";
import { InputProps } from "react-html-props";
import { UseFormRegisterReturn } from 'react-hook-form';

type RadioButtonProps =  {
  id: string;
  key?: string;
  label: string;
  className: string;
  disabled: boolean;
  registration?: Partial<UseFormRegisterReturn>;
} & InputProps

export const RadioButton = (props: RadioButtonProps) => {
  const {
    id,
    label,
    registration,
    disabled = false,
    key = null,
    className = ""
  } = props;

  return (
    <div key={key} className="flex items-center gap-1.5 cursor-pointer">
      <input
        type="radio"
        className={clsxm(
          "focus:bg-primary-500 focus:ring-primary-500 checked:bg-primary-500",
          "hover:bg-primary-500 active:bg-primary-500 accent-primary-500",
          className
        )}
        id={id}
        disabled={disabled}
        {...registration}
      />
      <label className={clsxm("text-fg-800 dark:text-fg-200")} htmlFor={id}>{label}</label>
    </div>
  );
};


