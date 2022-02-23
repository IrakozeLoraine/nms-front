import React from 'react';
import notify from '../../public/icons/notify.svg';
import { NotificationTriggerProps } from '../../types/notifications/Notification';
import Notification from '../atoms/Notification';
import Tooltip from '../atoms/Tooltip';

export default function NotificationTrigger({
  showNotifications,
  handleNotifications,
  hasUnread,
  notifications,
}: NotificationTriggerProps) {
  return (
    <Tooltip
      on="click"
      position="bottom right"
      trigger={
        <button
          className="rounded-full flex text-gray-400"
          onClick={handleNotifications}
        >
          <div className="relative">
            <img src={notify} alt="" />
            {hasUnread && (
              <div className="bg-transparent rounded-full h-3 w-3 absolute -top-1.5 -right-1.5 flex items-center justify-center">
                <span className="absolute w-2 h-2 bg-primary self-center rounded-full"></span>
              </div>
            )}
          </div>
        </button>
      }
    >
      <Notification notifications={notifications} />
    </Tooltip>
  );
}
