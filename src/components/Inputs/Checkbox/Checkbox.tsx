import React from "react";
import { clsxm } from "../../../common/clsxm"
import { UseFormRegisterReturn } from "react-hook-form";
import { InputProps } from "react-html-props";

type CheckboxExtendedProps = {
  id: string;
  key?: string;
  label: string;
  className?: string;
  disabled?: boolean;
  registration?: Partial<UseFormRegisterReturn>;
} & InputProps

export const Checkbox = (props: CheckboxExtendedProps) => {
  const {
    id,
    label,
    registration,
    disabled = false,
    key = null,
    className = "",
  } = props;

  return (
    <div key={key} className="flex items-center gap-1.5 cursor-pointer">
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
      <label className={clsxm("text-fg-800 dark:text-fg-200")} htmlFor={id}>{label}</label>
    </div>
  )
}
