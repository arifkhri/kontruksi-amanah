import { INotificationItem } from './Notification';

export const initialState: any[] = [];

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const REMOVE_ALL = 'REMOVE_ALL';

export const notificationReducer = (state: INotificationItem[], action: {type: 'ADD' | 'REMOVE' | 'REMOVE_ALL', payload: INotificationItem}) => {
  switch (action.type) {
  case ADD:
    return [
      ...state,
      {
        id: +new Date(),
        type: action.payload.type,
        title: action.payload.title,
        content: action.payload.content,
      }
    ];
  case REMOVE:
    return state.filter((t) => t.id !== action.payload.id);
  case REMOVE_ALL:
    return initialState;
  default:
    return state;
  }
};
