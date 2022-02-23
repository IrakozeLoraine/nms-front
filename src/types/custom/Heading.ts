import { ReactNode } from 'react';
import { IColorType, IFontSizeType, IFontWeightType } from '..';

export interface HeadingProps {
  fontSize?: IFontSizeType;
  fontWeight?: IFontWeightType;
  color?: IColorType;
  className?: string;
  children: ReactNode;
}
