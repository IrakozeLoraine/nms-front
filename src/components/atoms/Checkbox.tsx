import React, { ChangeEvent, useEffect, useState } from 'react';
import { CheckboxProps } from '../../types/form/Form';
import Label from './Label';

export default function Checkbox({
  label,
  inputname,
  value,
  handleChange,
  isChecked = false,
  disabled,
  classname = '',
  labelclassname = '',
}: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    if (handleChange) {
      handleChange(e);
    }
  };

  useEffect(() => setChecked(!!isChecked), [isChecked]);

  return (
    <>
      <label className="inline-flex items-center">
        <input
          name={inputname}
          type="checkbox"
          className={`appearance-none cursor-pointer h-5 w-5 text-primary border-2 mr-4 rounded-sm bg-main border-secondary-400 checked:bg-primary checked:border-primary checked:text-main checked:bg-check ${classname}`}
          checked={checked}
          disabled={disabled}
          value={value + ''}
          onChange={handleCheck}
        />
        {label && (
          <Label
            label={label}
            inputname={inputname}
            labelclassname={`text-base text-secondary-500 uppercase ${labelclassname}`}
          />
        )}
      </label>
    </>
  );
}
