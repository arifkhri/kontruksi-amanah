import { useMemo, useReducer } from 'react';
import dynamic from 'next/dynamic';
import { AppProps } from 'next/app';
import { Catamaran } from '@next/font/google';
import { ApolloProvider, } from '@apollo/client';

import client from '../../apollo-client';
import localDataReducer from '../reducers/localData';
import { LocalDataContext } from '../contexts/localData';

import '../styles/global.scss';

const NotificationProvider = dynamic(
  () => import('../components/Notification/NotificationProvider'),
  { ssr: false }
);

const font = Catamaran({
  subsets: ['latin'],
  variable: '--font-inter',
});

function MyApp({ Component, pageProps }: AppProps) {
  const [store, dispatch] = useReducer(localDataReducer, {});
  const contextValue = useMemo(() => ({ store, dispatch }), [store, dispatch]);

  return (
    <ApolloProvider client={client}>
      <LocalDataContext.Provider value={contextValue}>
        <NotificationProvider>
          <div className={`${font.variable} font-catamaran overflow-hidden`}>
            <Component {...pageProps} />
          </div>
        </NotificationProvider>
      </LocalDataContext.Provider>
    </ApolloProvider>
  );
}

export default MyApp;
