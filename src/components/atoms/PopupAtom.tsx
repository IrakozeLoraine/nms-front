import '../../styles/Popup.css';

import React, { ReactNode } from 'react';
import Popup from 'reactjs-popup';
import Heading from './Heading';

type PropType = {
  closeOnClickOutSide?: boolean;
  open: boolean;
  title?: string;
  children: ReactNode;
  onClose?: () => void;
};

export default function PopupAtom({
  closeOnClickOutSide = false,
  open,
  title,
  onClose,
  children,
}: PropType) {
  return (
    <Popup
      open={open}
      closeOnDocumentClick={closeOnClickOutSide}
      onClose={onClose}
      modal
    >
      <div className="modal block p-8">
        {/* close button  */}
        <div
          className={`flex pb-6 ${title ? 'justify-between' : 'justify-end'}`}
        >
          {title && (
            <Heading fontWeight="font-semibold" color="text-primary">
              {title}
            </Heading>
          )}

          {/* <button className="close outline-none" onClick={onClose}>
            <img src={} alt="" />
          </button> */}
        </div>
        {/* content to be renderd in the popup */}
        {children}
      </div>
    </Popup>
  );
}
