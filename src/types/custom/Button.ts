import { ButtonHTMLAttributes, DOMAttributes, ReactNode } from 'react';
import { IColorType, ITextDecorationType } from '..';

type ButtonType = 'fill' | 'outline' | 'text';

export type ButtonStyleType = {
  [index in ButtonType]: string;
};

export interface ButtonPropTypes<T>
  extends ButtonHTMLAttributes<DOMAttributes<T>> {
  children: ReactNode;
  full?: boolean;
  icon?: boolean;
  styleType?: ButtonType;
  color?: IColorType;
  bgColor?: IColorType;
  hoverStyle?: ITextDecorationType;
  className?: string;
  onClick?: () => void;
}
