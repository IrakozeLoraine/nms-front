import React from 'react';
import { ILabel } from '../../types/form/Form';

export default function Label({
  label,
  inputname,
  labelclassname = '',
  labelhidden = false,
}: ILabel) {
  return (
    <>
      <label
        htmlFor={inputname}
        className={`${labelclassname}`}
        hidden={labelhidden}
      >
        {label}
      </label>
    </>
  );
}
