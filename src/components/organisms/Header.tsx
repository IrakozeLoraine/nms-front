import React, { useState } from 'react';
import { HeaderProps } from '../../types/custom/Dashboard';
import { NotificationStatus } from '../../types/notifications/Notification';
import Search from '../atoms/Search';
import NotificationTrigger from '../molecule/NoficationTrigger';

export default function Header({
  handleSearch,
  searchname = '',
  showSearch = false,
  searchvalue = '',
}: HeaderProps) {
  const searchHandle = () => {
    if (handleSearch) {
      handleSearch;
    }
  };

  const notifications = [
    {
      id: '1',
      title: 'Welcome to NMS platform',
      message: 'It is quite a pleasure to host you here',
      notification_status: NotificationStatus.UNREAD,
      created_on: new Date().toString(),
    },
  ];

  const [showNotifications, setShowNotifications] = useState(true);

  return (
    <div className="flex items-center justify-center pt-9 pb-8 gap-24">
      {showSearch && (
        <div className="flex items-center justify-center">
          <Search
            handleChange={searchHandle}
            inputname={searchname}
            value={searchvalue}
          />
        </div>
      )}
      <NotificationTrigger
        hasUnread={
          notifications.find(
            (not) => not.notification_status === NotificationStatus.UNREAD
          ) !== undefined
        }
        notifications={notifications}
        showNotifications={showNotifications}
        handleNotifications={() => setShowNotifications(!showNotifications)}
      />
    </div>
  );
}
