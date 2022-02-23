export enum NotificationStatus {
  UNREAD = 'UNREAD',
  READ = 'READ',
}

export interface NotificationInfo {
  id: string;
  title: string;
  message: string;
  notification_status: NotificationStatus;
  created_on: string;
}

export interface NotificationProps {
  notifications: NotificationInfo[];
}

export interface NotificationTriggerProps extends NotificationProps {
  showNotifications: boolean;
  handleNotifications: () => void;
  hasUnread?: boolean;
}
