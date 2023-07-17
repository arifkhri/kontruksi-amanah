import { useContext } from 'react';
import { LocalDataContext } from '../contexts/localData';

declare interface ILocalData {
    store: any,
    dispatch: any
}

const useLocalData = (): ILocalData => useContext(LocalDataContext);
export default useLocalData;
