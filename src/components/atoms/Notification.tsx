import moment from 'moment';
import React from 'react';
import {
  NotificationInfo,
  NotificationProps,
  NotificationStatus,
} from '../../types/notifications/Notification';
import Heading from './Heading';

export default function Notification({ notifications }: NotificationProps) {
  return (
    <div className="bg-main flex flex-col pb-6 p-4 w-72 overflow-y-auto h-96">
      <Heading
        fontSize="xl"
        color="primary"
        className={`py-4 text-center uppercase`}
      >
        Notifications
      </Heading>
      {notifications && notifications?.length > 0 ? (
        notifications?.map((notification, index) => (
          <React.Fragment key={notification.id}>
            <div
              onKeyDown={() => {}}
              role="button"
              tabIndex={index}
              onClick={() => {}}
            >
              <div className="pt-7 pb-3">
                <Heading
                  fontSize="base"
                  fontWeight="light"
                  color="secondary-500"
                >
                  {moment(notification.created_on).format('MM/DD/YYYY')}
                </Heading>
              </div>
              <div className="flex justify-between items-center gap-6">
                <div className="flex flex-col gap-1 pb-4">
                  <Heading
                    color="txt-primary"
                    fontSize="base"
                    fontWeight="semibold"
                  >
                    {notification.title}
                  </Heading>

                  <Heading fontSize="sm" color="txt-primary">
                    {notification.message}
                  </Heading>
                </div>
                <div>
                  {notification.notification_status ===
                  NotificationStatus.UNREAD ? (
                    <span className="h-2 w-2 block bg-primary-400 rounded-full"></span>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <hr className="bg-tertiary" style={{ height: '2px' }} />
          </React.Fragment>
        ))
      ) : (
        <div className="flex flex-col gap-1 pb-4 pt-4">
          <Heading fontSize="sm" color="txt-primary">
            No new notifications
          </Heading>
        </div>
      )}
    </div>
  );
}
