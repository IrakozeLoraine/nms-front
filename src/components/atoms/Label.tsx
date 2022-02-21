import React from 'react';
import { ILabel } from '../../types/form/Form';

export default function Label({
  label,
  inputname,
  labelclassname = '',
}: ILabel) {
  return (
    <>
      <label htmlFor={inputname} className={`${labelclassname}`}>
        {label}
      </label>
    </>
  );
}
