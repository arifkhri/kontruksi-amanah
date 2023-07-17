import { useReducer } from 'react';
import { createPortal } from 'react-dom';

import Notification from './Notification';
import NotificationContext from './NotificationContext';
import { initialState, notificationReducer } from './notificationReducer';

export interface NotificationProviderProps {
  children: React.ReactNode;
}

function NotificationProvider(props: NotificationProviderProps) {
  const [store, dispatch] = useReducer(notificationReducer, initialState);
  const contextValue = { store, dispatch };

  return (
    <NotificationContext.Provider value={contextValue}>
      {props.children}
      {createPortal(
        <Notification
          notificationItems={store}
        />, document.body)}
    </NotificationContext.Provider>
  );
}

export default NotificationProvider;