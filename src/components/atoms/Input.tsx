import React, { useEffect } from 'react';
import { InputProps } from '../../types/form/Form';
import Error from './Error';
import Label from './Label';

export default function Input({
  inputname,
  id,
  value,
  type,
  label,
  required = true,
  disabled = false,
  classname = '',
  labelclassname,
  handleChange,
}: InputProps) {
  useEffect(() => {
    if (!id) {
      id = inputname;
    }
  }, [id]);

  return (
    <div className="relative z-0 mb-6 w-full group">
      <input
        id={id}
        type={type}
        name={inputname}
        value={value}
        className={`block py-2.5 px-0 w-full text-base text-secondary-500 bg-transparent border-0 border-b-2 border-secondary-400 appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer dark:text-txt-primary ${classname} `}
        placeholder={' '}
        disabled={disabled}
        required={required}
        onChange={(e) => handleChange(e)}
      />
      <Label
        label={label}
        inputname={inputname}
        labelclassname={`absolute text-base text-secondary-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase ${labelclassname}`}
      />
      <Error message={''} display={'hidden'} />
    </div>
  );
}
