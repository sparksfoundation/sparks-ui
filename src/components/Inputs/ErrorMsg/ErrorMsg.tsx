import React from "react";
import { clsxm } from "../../../common/clsxm";
import { DivProps } from "react-html-props";

type ErrorExtendedProps = {
  children?: string,
  className?: string,
} & DivProps

export const ErrorMsg = (props: ErrorExtendedProps) => {
  const { children, className = '', ...rest } = props;

  return (
    <div
      className={clsxm(
        "text-danger-700 text-xs text-right block mt-1 w-full",
        children ? "visible" : "invisible",
        className,
      )}
      {...rest}
    >
      {children}
      &nbsp;
    </div>
  )
}