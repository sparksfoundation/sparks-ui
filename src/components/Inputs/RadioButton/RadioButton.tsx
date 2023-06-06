import React, { ChangeEventHandler } from 'react';
import { FieldValues, UseFormSetValue } from 'react-hook-form';
import { clsxm } from "../../../common/clsxm";

type RadioButtonProps =  {
  id: string;
  label: string;
  value: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  setValue?: UseFormSetValue<FieldValues>;
  name?: string;
}

export const RadioButton = (props: RadioButtonProps) => {
  const {
    id,
    label,
    value,
    checked,
    onChange,
    setValue,
    name,
  } = props;

  return (
    <div className="flex items-center cursor-pointer">
      <input
        type="radio"
        className={clsxm("text-fg-800 dark:text-fg-200 m-2")}
        id={id}
        value={value}
        checked={checked}
        onChange={() => {}}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};


