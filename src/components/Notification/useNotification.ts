import { useContext } from 'react';

import NotificationContext, { INotificationContext } from './NotificationContext';

export const useNotification = (): INotificationContext => {
  return useContext(NotificationContext);
};
