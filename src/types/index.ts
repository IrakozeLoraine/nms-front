import { FormEvent } from 'react';

export type IColorType =
  | 'primary'
  | 'main'
  | 'secondary-400'
  | 'secondary-500'
  | 'red-600'
  | 'txt-primary';

export type IFontSizeType =
  | 'xs'
  | 'sm'
  | 'base'
  | 'tiny'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl';

export type ITextTransformType =
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | 'normal-case';

export type IFontWeightType =
  | 'bold'
  | 'semibold'
  | 'medium'
  | 'normal'
  | 'light';

export type ITextDecorationType = 'no-underline' | 'underline';
