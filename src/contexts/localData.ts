import { createContext } from 'react';

declare interface ILocalData {
    store: any,
    dispatch: any
}

export const LocalDataContext = createContext({} as ILocalData);
