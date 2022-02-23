import { ReactNode } from 'react';
import { EventType } from 'reactjs-popup/dist/types';

export interface ToolTipPropType {
  children: ReactNode;
  position?: PositionTypes;
  on?: EventType;
  trigger: JSX.Element;
}

type PositionTypes =
  | 'top left'
  | 'top center'
  | 'top right'
  | 'right top'
  | 'right center'
  | 'right bottom'
  | 'bottom left'
  | 'bottom center'
  | 'bottom right'
  | 'left top'
  | 'left center'
  | 'left bottom'
  | 'center center';
