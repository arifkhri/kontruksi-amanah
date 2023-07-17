import React from 'react';

import { useNotification } from './useNotification';
import { CheckCirleSuccess, WarningCirleDanger, X } from '../Icons';

import style from './style.module.scss';

export interface INotificationItem {
  id: string;
  type: 'success' | 'error';
  title: string;
  content: string;
}

export interface NotificationProps {
  notificationItems: INotificationItem[];
}

export default function Notification(props: NotificationProps) {
  const { notificationItems } = props || {};
  const { dispatch } = useNotification();

  const icons = {
    success: <CheckCirleSuccess />,
    error: <WarningCirleDanger />,
  };

  // notificationItems.forEach((item) => {
  //   setTimeout(() => {
  //     dispatch({ type: 'REMOVE', payload: { id: item.id } });
  //   }, 3000);
  // });

  return (
    <div className={style['notification']}>
      <div className={style['notification-container']}>
        {
          notificationItems.map((item) => (
            <div className={style['notification-item']} key={item.id} role="alert">
              <div>
                {icons[item.type]}
              </div>
              <div className={style['notification-item-container']}>
                <div className={style['notification-item-title']}>
                  {item.title}
                </div>
                <div className={style['notification-item-content']}>
                  {item.content}
                </div>
              </div>
              <div className={style['notification-item-x']} onClick={() => dispatch({ type: 'REMOVE', payload: { id: item.id } })}>
                <X />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
