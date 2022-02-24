import { FormEvent } from 'react';

export type IColorType =
  | 'text-primary'
  | 'text-main'
  | 'text-secondary-300'
  | 'text-secondary-400'
  | 'text-secondary-500'
  | 'text-red-600'
  | 'text-txt-primary';

export type IBgColorType =
  | 'border-primary'
  | 'border-main'
  | 'border-secondary-300'
  | 'border-secondary-400'
  | 'border-secondary-500'
  | 'border-red-600'
  | 'border-txt-primary'
  | 'bg-primary'
  | 'bg-main'
  | 'bg-secondary-300'
  | 'bg-secondary-400'
  | 'bg-secondary-500'
  | 'bg-red-600'
  | 'bg-txt-primary';

export type IFontSizeType =
  | 'text-xs'
  | 'text-sm'
  | 'text-base'
  | 'text-lg'
  | 'text-xl'
  | 'text-2xl'
  | 'text-3xl'
  | 'text-4xl'
  | 'text-5xl';

export type ITextTransformType =
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | 'normal-case';

export type IFontWeightType =
  | 'font-bold'
  | 'font-semibold'
  | 'font-medium'
  | 'font-normal'
  | 'font-light';

export type ITextDecorationType = 'no-underline' | 'underline';
