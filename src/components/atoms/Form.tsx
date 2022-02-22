import React from 'react';
import { IFormProps } from '../../types/form/Form';

export default function Form({ children, onSubmit }: IFormProps) {
  return (
    <>
      <form className="bg-main rounded-lg py-12 px-24" onSubmit={onSubmit}>
        <div>{children}</div>
      </form>
    </>
  );
}
