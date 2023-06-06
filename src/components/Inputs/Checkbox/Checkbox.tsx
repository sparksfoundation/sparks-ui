import React from "react";
import { clsxm } from "../../../common/clsxm"
import { UseFormRegisterReturn } from "react-hook-form";
import { InputProps } from "react-html-props";

type CheckboxExtendedProps = {
  registration?: Partial<UseFormRegisterReturn>;
  disabled?: boolean;
  className?: string;
} & InputProps

export const Checkbox = (props: CheckboxExtendedProps) => {
  const { className, registration } = props;

  return (
    <input
      type="checkbox"
      className={clsxm(
        "focus:bg-primary-500 focus:ring-primary-500 checked:bg-primary-500",
        "hover:bg-primary-500 active:bg-primary-500 accent-primary-500",
        className
      )}
      {...registration}
      {...props}
    />
  )
}
