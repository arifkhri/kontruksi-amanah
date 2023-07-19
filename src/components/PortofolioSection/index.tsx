import Link from 'next/link';

import { CardItem } from './CardItem';
import Container from '../Container';
import Button from '../Button';
import styles from './style.module.scss';

export default function ServiceSection() {
  const data = [{
    pictureUrl: '/images/perumahan-syariah/tampak depan.jpeg',
    title: 'Perumahan Syariah',
    urlDetail: ''
  }];

  return (
    <section id="portofolio" className={styles['portofolio-bg']}>
      <Container className="pt-[4.375rem] pb-[80px] flex flex-col justify-center">
        <h3 className="text-center text-left mb-16">
          <div>Portofolio</div>
        </h3>

        <div className="flex justify-center lg:px-40 px-10">
          {
            data.map((house) => (
              <CardItem
                key={house.title}
                image={house.pictureUrl}
                altImage={house.title}
                title={house.title}
              />
            ))
          }

        </div>
        <div className="flex justify-center">
          <Link href="//api.whatsapp.com/send?phone=6281574156100&text=Assalamu'alaikum, Saya tertarik dengan layanannya bisa tanya - tanya lebih lanjut?" target="_blank" passHref>
            <Button type="outline" size="lg" className="text-center mt-20 m-auto !text-[1.25rem]">
              Konsultasi Sekarang Gratis
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
