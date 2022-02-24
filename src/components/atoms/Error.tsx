import React from 'react';
import { IError } from '../../types/form/Form';

export default function Error({
  message,
  color = 'text-red-600',
  display = 'hidden',
}: IError) {
  return (
    <>
      <span className={`text-sm ${color} ${display}`} id="error">
        {message}
      </span>
    </>
  );
}
