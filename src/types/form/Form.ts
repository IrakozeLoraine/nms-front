import { ChangeEventHandler, ReactNode } from 'react';
import { IColorType } from '..';

export interface ILabel {
  label: string;
  inputname: string;
  labelclassname?: string;
}

export interface InputProps extends ILabel {
  value: string | number;
  type?: InputType;
  classname?: string;
  handleChange?: (_e?: ChangeEventHandler<HTMLInputElement>) => void;
}

export interface SelectProps extends InputProps {
  options: SelectOptions[];
}

type SelectOptions = {
  label: string;
  value: string | number;
};
type InputType = 'email' | 'text' | 'password';
type IDisplayType = 'flex' | 'block' | 'hidden';

export interface IFormProps {
  children: ReactNode;
}

export interface IError {
  message: string;
  color?: IColorType;
  display?: IDisplayType;
}
