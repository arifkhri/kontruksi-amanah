import React, { useState } from 'react';

import Modal from '../../components/Modal';
import Container from '../Container';
import IntegrationInfo from './IntegrationInfo';

import styles from './style.module.scss';

function ShipdeoSection() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const benefits = ['Platform Gratis', 'Diskon Mulai 20%', 'Banyak Pilihan Ekspedisi', 'Minimalisir Pengembalian', 'Fee COD Tetap Di 3%', 'Terintegrasi Dengan Webstore Milikmu'];

  return (
    <section id="shipdeo">
      <Container className="pt-[9.375rem]">

        <div className={styles['shipdeo-section-bg']}>
          <div className="text-left lg:mb-0 mb-12 lg:mb-16">
            <h3 className="text-ultramarine-50 mb-3">
              <span className="text-volt-500">Kelola pengirimanmu </span>pakai Shipdeo
            </h3>
            <p className="font-medium lg:text-xl text-lg leading-9 mb-6 text-ultramarine-100">
              Shipdeo platform menjadi pilihan utama para seller untuk mewujudkan pengelolaan semua kebutuhan pengiriman serta memastikan sampai tepat tujuan.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-14">
            <img
              className="lg:order-2"
              src="/images/shipdeo-illust.svg"
              alt="kelola pengirimanmu pakai shipdeo"
            />
            <div className="flex flex-col lg:gap-16 gap-8 lg:justify-between">
              <div className="flex flex-col gap-5">
                {
                  benefits.map((benefit, idx) => (
                    <div className="flex gap-3" key={idx}>
                      <img src="/images/check.svg" alt={benefit} />
                      <p className="text-white lg:text-xl text-lg font-medium">{benefit}</p>
                    </div>
                  ))
                }
              </div>
              <div className="text-ultramarine-200 lg:text-xl text-lg font-medium flex gap-2 items-center cursor-pointer" onClick={() => setOpenModal(true)}>
                Lihat cara integrasi shipdeo
                <img src="/images/arrow-right.svg" alt="lihat cara integrasi shipdeo" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Modal open={openModal} title="Tata Cara Integrasi Shipdeo" onCancel={setOpenModal}>
        <IntegrationInfo />
      </Modal>
    </section>
  );
}

export default ShipdeoSection;