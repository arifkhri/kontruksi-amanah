import { Fragment } from 'react';

import { ServiceItem } from './ServiceItem';
import Container from '../Container';

import styles from './style.module.scss';

export default function ServiceSection() {
  return (
    <section id="service" className={styles['service-bg']}>
      <Container className="pt-[9.375rem]">
        <h3 className="text-center text-left mb-16 text-ultramarine-50">
          <div>Layanan Kami</div>
        </h3>

        <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-5 lg:px-10">
          <ServiceItem
            image="/images/Service-01.svg"
            altImage="proses order singkat"
            title="Bangun Rumah"
            desc={<Fragment>Cepat membereskan orderan semua tokomu di berbagai marketplace.</Fragment>}
          />
          <ServiceItem
            image="/images/Service-02.svg"
            altImage="user friendly"
            title="Renovasi Rumah"
            desc={<Fragment>Desain aplikasinya bikin kamu makin betah terus urus semua toko seharian!</Fragment>}
          />
          <ServiceItem
            image="/images/Service-03.svg"
            altImage="seller obsessed"
            title="Desain Arsitektur"
            desc={<Fragment>Selalu mendengarkan setiap masukkan untuk lebih perhatian pada kebutuhanmu.</Fragment>}
          />
        </div>
      </Container>
    </section>
  );
}
