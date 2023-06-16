import React, { ChangeEventHandler } from "react";
import { clsxm } from "../../../common/clsxm";
import { InputProps } from "react-html-props";
import { UseFormRegisterReturn } from "react-hook-form";

type RadioButtonProps = {
  id: string;
  key?: string;
  className: string;
  disabled: boolean;
  registration?: Partial<UseFormRegisterReturn>;
} & InputProps;

export const RadioButton = (props: RadioButtonProps) => {
  const { id, registration, disabled = false, className = "", ...rest } = props;

  return (
    <input
      type="radio"
      className={clsxm(
        "focus:bg-primary-500 focus:ring-primary-500 checked:bg-primary-500",
        "hover:bg-primary-500 active:bg-primary-500 accent-primary-500 bg-transparent",
        "ring-1 ring-primary-500 cursor-pointer",
        className
      )}
      id={id}
      disabled={disabled}
      {...registration}
      {...rest}
    />
  );
};
