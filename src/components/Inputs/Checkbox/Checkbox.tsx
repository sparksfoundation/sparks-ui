import React from "react";
import { clsxm } from "../../../common/clsxm";
import { UseFormRegisterReturn } from "react-hook-form";
import { InputProps } from "react-html-props";

type CheckboxExtendedProps = {
  id: string;
  className?: string;
  disabled?: boolean;
  registration?: Partial<UseFormRegisterReturn>;
} & InputProps;

export const Checkbox = (props: CheckboxExtendedProps) => {
  const {
    id,
    registration,
    disabled = false,
    key = null,
    className = "",
    ...rest
  } = props;

  return (
    <input
      id={id}
      type="checkbox"
      className={clsxm(
        "focus:bg-primary-500 focus:ring-primary-500 checked:bg-primary-500",
        "hover:bg-primary-500 active:bg-primary-500 accent-primary-500 bg-transparent",
        "ring-1 ring-primary-500 cursor-pointer",
        className
      )}
      {...registration}
      {...rest}
    />
  );
};
