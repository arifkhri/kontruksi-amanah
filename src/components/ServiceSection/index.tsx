import { Fragment } from 'react';

import { ServiceItem } from './ServiceItem';
import Container from '../Container';

import styles from './style.module.scss';

export default function ServiceSection() {
  return (
    <section id="service" className={styles['service-bg']}>
      <Container className="pt-[9.375rem] pb-[100px]">
        <h3 className="text-center text-left mb-16">
          <div>Layanan Kami</div>
        </h3>

        <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-5 lg:px-40 px-10">
          <ServiceItem
            image="/images/Service-01.svg"
            altImage="proses order singkat"
            title="Bangun Rumah"
            desc={<Fragment>Kami menawarkan beragam paket pembangunan rumah, mulai dari rumah sederhana hingga rumah mewah yang sesuai dengan kebutuhan anda.</Fragment>}
          />
          <ServiceItem
            image="/images/Service-02.svg"
            altImage="user friendly"
            title="Renovasi Rumah"
            desc={<Fragment>Kami menawarkan beragam paket pembangunan rumah, mulai dari rumah sederhana hingga rumah mewah yang sesuai dengan kebutuhan anda.</Fragment>}
          />
          <ServiceItem
            image="/images/Service-03.svg"
            altImage="seller obsessed"
            title="Desain Arsitektur"
            desc={<Fragment>Kami menawarkan beragam paket pembangunan rumah, mulai dari rumah sederhana hingga rumah mewah yang sesuai dengan kebutuhan anda.</Fragment>}
          />
        </div>
      </Container>
    </section>
  );
}
