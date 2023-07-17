import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import useLocalData from '../../hooks/useLocalData';
import Button from '../Button';
import Container from '../Container';
import { trackEvent } from '../../core/utils';
import styles from './style.module.scss';
import Link from 'next/link';

interface ItemNavProps {
  name: string;
  href: string;
}

function Header() {
  const [menuCollapsed, setMenuCollapsed] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dispatch } = useLocalData();

  function showReqDemoModal() {
    dispatch({
      type: 'update',
      name: 'openModal',
      value: true
    });
  }

  function showMobileMenu(value: boolean) {
    setMenuCollapsed(value);
  }

  function ItemNav(props: ItemNavProps) {
    const { name, href } = props;
    return (
      <li>
        <a
          href={href}
          className="block py-2 pl-3 pr-4 text-[1.125rem] text-ultramarine-50 rounded lg:bg-transparent lg:p-0"
          onClick={() => showMobileMenu(false)}
          aria-label={`Navigate to ${name}`}
        >{name}</a>
      </li>
    );
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let scroll = false;
      if (window.scrollY > 50) {
        scroll = true;
      }
      setScrolled(scroll);
    });
  }, []);


  return (
    <header className={clsx(styles['header'], menuCollapsed ? styles['active'] : '')}>
      <Container overrideClassName className={clsx('xl:px-[150px] lg:px-[100px] lg:pb-4 pt-4 [@media(min-width:1440px)]:max-w-[1440px] mx-auto')}>
        <nav className={clsx((scrolled ? 'lg:backdrop-blur-sm lg:bg-ultramarine-1000 lg:bg-opacity-75 lg:rounded-full' : ''), 'lg:p-3.5')}>
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
            <a href="#" className="flex items-center lg:px-0 px-8 lg:ml-4" aria-label="Go to homepage">
              <img src="/images/kloola-brand.svg" alt="" />
            </a>
            <div className="flex items-center lg:order-2 lg:px-0 px-8 gap-3">
              <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none" aria-controls="mobile-menu-2" aria-expanded="false" onClick={() => showMobileMenu(!menuCollapsed)}>
                <span className="sr-only">Open main menu</span>
                <svg className={styles['navicon-mobile']} data-icon="bar" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                <svg className={styles['navicon-mobile']} data-icon="x" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </button>
            </div>
            <div className={styles['mobile-menu']} id="mobile-menu-2" data-collapsed={menuCollapsed}>
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:gap-x-16 lg:mt-0 lg:px-0 px-4">
                <ItemNav name="Beranda" href="#" />
                <ItemNav name="Layanan" href="#service" />
                <ItemNav name="Portofolio" href="#portofolio" />
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </header >
  );
}

export default Header;
