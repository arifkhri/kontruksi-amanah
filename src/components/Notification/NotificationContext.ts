import { createContext, Dispatch } from 'react';

export interface INotificationContext {
  dispatch: Dispatch<any>;
  store: any;
}

const NotificationContext = createContext({} as INotificationContext);

export default NotificationContext;
