import React from 'react';

import SocialItem from './SocialItem';
import Icon from '../Icon';

import styles from './style.module.scss';
import Container from '../Container';

function Footer() {
  return (
    <footer className="bg-[#426A5A] text-[#f9fAfA]">
      <Container>
        <div className="pt-[3.125rem] pb-8">
          <div className="max-w-screen-xl mx-auto md:pb-[3.125rem] md:pt-[3.125rem] pt-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 px-5 lg:px-40">
              <img src="/images/kloola-brand-footer.svg" alt="" />
              <div className="lg:pl-40">
                <h4 className="mb-4 text-base font-bold">Info Kontak</h4>
                <ul className="text-base">
                  <li className="mb-2 flex gap-3">
                    <Icon name="phone" />
                    <a href="#" className="hover:underline">+62 815 7415 6100 (Admin 1)</a>
                  </li>

                  <li className="mb-4 flex gap-3">
                    <Icon name="phone" />
                    <a href="#" className="hover:underline">+62 858 5231 5590 (Admin 2)</a>
                  </li>

                  <li className="mb-4 flex gap-3">
                    <Icon name="mapin" />
                    <a href="https://goo.gl/maps/w1WWJJHYjghgUkub6" target="_blank" rel="noopener noreferrer">
                      <p>Buah Batu No. 105 A-B Bandung City West Java, 40265</p>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="lg:col-start-4 mb-11 lg:mb-0">
                <h4 className="mb-4 text-base font-bold">Social Media</h4>
                <ul className="text-gray-500 dark:text-gray-400 grid grid-cols-5 gap-2 items-center max-w-[200px] items-center">
                <SocialItem img="ig" url="https://instagram.com/kloola.id?igshid=YmMyMTA2M2Y=" />
                <SocialItem img="in" url="https://www.linkedin.com/company/kloola/" />
                </ul>
              </div> */}
            </div>
          </div>
          <div className={styles['copyright-card']}>
            <p>©{new Date().getFullYear()} Kontruksi Amanah</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
