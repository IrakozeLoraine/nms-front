import React, { useEffect } from 'react';

import search from '../../public/icons/search.svg';
import { ISearchProps } from '../../types/form/Form';

export default function Search({
  handleChange,
  id,
  inputname,
  value,
  placeholder = 'Search',
  width = 'w-96',
  classname = '',
}: ISearchProps) {
  useEffect(() => {
    if (!id) {
      id = inputname;
    }
  }, [id, inputname]);

  return (
    <div
      className={`rounded-lg border-2 border-secondary-400 focus:border-primary flex items-center ${width}`}
    >
      <img src={search} alt="" className="px-4" />
      <input
        id={id}
        type="text"
        name={inputname}
        value={value}
        className={`bg-transparent py-2.5 px-0 w-full rounded-md text-base text-secondary-500 appearance-none  focus:outline-none dark:text-txt-primary ${classname} `}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
