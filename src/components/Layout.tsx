import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import { scrollTo } from '../core/utils';
import useLocalData from '../hooks/useLocalData';
import Header from './Header';
import Footer from './Footer';
import HeroBlockSection from './HeroBlockSection';
import ServiceSection from './ServiceSection';
import PortofolioSection from './PortofolioSection';
import WhatsappSection from './WhatsappSection';

function Layout() {
  const { store, dispatch } = useLocalData();
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        scrollTo(hash);
      }, 500);
    }
  }, [document.getElementById(window.location.hash.replace('#', ''))]);

  useEffect(() => {
    if (store.openModal) {
      setOpenModal(store.openModal);
    }

    if (!openModal) {
      dispatch({
        type: 'update',
        name: 'openModal',
        value: false
      });
    }
  }, [store.openModal, openModal]);


  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Kontruksi Amanah</title>
      </Head>
      <Header />
      
      <main className="pt-[150px]">
        <HeroBlockSection />
        <ServiceSection />
        <PortofolioSection />
        <WhatsappSection />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
