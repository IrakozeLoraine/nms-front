import { IFontSizeType, IFontWeightType, ITextTransformType } from '..';

export interface SidebarLinkProps {
  to: string;
  iconLink?: string;
  title: string;
  active?: boolean;
  fontSize?: IFontSizeType;
  isRight?: boolean;
  transformText?: ITextTransformType;
  fontWeight?: IFontWeightType;
  className?: string;
  uppercase?: boolean;
}
