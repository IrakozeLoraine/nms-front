import React from 'react';
import { SelectProps } from '../../types/form/Form';
import Error from './Error';
import Label from './Label';

export default function Select({
  label = 'Select an option',
  inputname,
  value,
  handleChange,
  classname,
  labelclassname,
  options,
}: SelectProps) {
  return (
    <div className="relative z-0 mb-6 w-full group">
      <select
        name={inputname}
        value={value}
        onChange={(e) => handleChange(e)}
        className={`pt-3 pb-2 block w-full px-0 mt-0 bg-transparent appearance-none border-0 border-b-2 z-1 focus:outline-none focus:ring-0 focus:border-primary border-secondary-400  ${classname}`}
        // className={`block py-2.5 px-0 w-full text-sm text-secondary-500 bg-transparent border-0 border-b-2 border-secondary-400 appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer dark:text-txt-primary ${classname}`}
      >
        <option value="" selected disabled hidden></option>
        {options.map((option) => (
          <option
            value={option.value}
            key={option.value}
            onChange={(e) => handleChange(e)}
          >
            {option.label}
          </option>
        ))}
      </select>
      <Label
        label={label}
        inputname={inputname}
        labelclassname={`absolute duration-300 top-3 -z-1 origin-0 text-gray-500 uppercase ${labelclassname}`}
      />
      <Error message={''} display={'hidden'} />
    </div>
  );
}
