import { ChangeEvent, FormEvent, FormEventHandler, ReactNode } from 'react';
import { IColorType } from '..';

export interface ILabel {
  label: string;
  inputname: string;
  labelclassname?: string;
  labelhidden?: boolean;
}

export interface InputProps extends ILabel {
  value: string | number;
  id?: string;
  type?: InputType;
  classname?: string;
  required?: boolean;
  disabled?: boolean;
  handleChange: (
    _e?:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | React.FormEvent<HTMLOptionElement>
  ) => void;
}

export interface CheckboxProps extends ILabel {
  value: string | boolean;
  handleChange: (_e: ChangeEvent<HTMLInputElement>) => any;
  isChecked?: boolean;
  disabled?: boolean;
  classname?: string;
}

export interface SelectProps extends InputProps {
  options: SelectOptions[];
}

export type SelectOptions = {
  label: string;
  value: string | number;
};
type InputType = 'email' | 'text' | 'password';
type IDisplayType = 'flex' | 'block' | 'hidden';

export interface IFormProps {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export interface IError {
  message: string;
  color?: IColorType;
  display?: IDisplayType;
}
