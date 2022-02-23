import React from 'react';
import Popup from 'reactjs-popup';
import { ToolTipPropType } from '../../types/notifications/Tooltip';

export default function Tooltip({
  on,
  trigger,
  position,
  children,
}: ToolTipPropType) {
  return (
    <div id="tooltip-card" className="tooltip-card relative">
      <Popup
        on={on}
        className="tooltip-card"
        trigger={<div className="trigger-holder">{trigger}</div>}
        position={position}
        closeOnDocumentClick
      >
        {children}
      </Popup>
    </div>
  );
}
