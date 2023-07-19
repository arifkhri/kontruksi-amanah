import clsx from 'clsx';
import Link from 'next/link';

import useLocalData from '../../hooks/useLocalData';
import { trackEvent } from '../../core/utils';
import Container from '../Container';
import Button from '../Button';
import styles from './style.module.scss';

export default function HeroBlockSection() {
  const { dispatch } = useLocalData();

  function showReqDemoModal() {
    dispatch({
      type: 'update',
      name: 'openModal',
      value: true
    });
  }

  return (
    <section id="heroblock">
      <Container>
        <div className="flex-col items-center flex">
          <div className="mb-3 lg:px-40">

            <h1 className="flex flex-wrap justify-center text-center lg:text-[64px] text-[42px]">
              <div className="mr-3">Kelola</div>
              <div className="lg:mr-3">semua</div>
              <div className={clsx('relative text-center', styles['rotating-text'])}>
                <div>Tokomu</div>
                <div>Stokmu</div>
                <div>Orderanmu</div>
              </div>
              <div className={clsx('relative text-center', styles['rotating-text-mobile'])}>
                <div>Tokomu</div>
                <div>Stokmu</div>
                <div>Orderanmu</div>
              </div>
            </h1>
            <h1 className="text-center lg:text-[64px] text-[42px]">
              di Satu Tempat
            </h1>
          </div>

          <p className="font-medium text-2xl leading-9 mb-6 text-center lg:px-[15rem]">
            Biarkan Kloola mengurus proses order, produk, stok, sampai ke laporan sehingga kamu bisa lebih fokus ke pengembangan bisnis.
          </p>

          <div className="flex lg:flex-row flex-col items-center gap-3">
            <Link href="https://app.kloola.id/register" target="_blank" passHref>
              <Button size="lg" className="m-auto !text-[1.25rem]" onClick={() => trackEvent('registration_submitted')}>
                Coba Secara Gratis
              </Button>
            </Link>
            <Button type="outline" size="lg" className="m-auto !text-[1.25rem] border-[2px] block w-full lg:w-auto" onClick={() => showReqDemoModal()}>
              Request Demo
            </Button>
          </div>

          <img src="/images/heroblock.svg" alt="Manage more online stores" />
        </div>

      </Container>


    </section>
  );
}