import React from 'react'
import { clsxm } from '../../../common/clsxm'
import { LabelProps } from 'react-html-props';

type LabelExtendedProps = {
  id?: string,
  children: string,
  className?: string,
} & LabelProps


export const Label = (props: LabelExtendedProps) => {
  const { id, children, className = '', ...rest } = props;

  return (
    <label
      htmlFor={id}
      className={clsxm(
        "w-full mb-2 text-base",
        "text-fg-700 dark:text-fg-200",
        className,
      )}
      {...rest}
    >
      {children}
    </label>
  )
}