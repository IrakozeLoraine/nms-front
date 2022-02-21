import React from 'react';
import { IFormProps } from '../../types/form/Form';

export default function Form({ children }: IFormProps) {
  return (
    <>
      <div className="bg-main rounded-lg py-12 px-24">
        <div>{children}</div>
      </div>
    </>
  );
}
