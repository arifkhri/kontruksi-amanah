import Link from 'next/link';

import Button from '../Button';
import Container from '../Container';

import styles from './style.module.scss';

function SolutionSection() {

  return (
    <section id="solution">
      <Container className="pb-20">

        <div className={styles['solution-section-bg']}>
          <div className="text-left lg:mb-0 mb-12">
            <h3 className="mb-10 lg:text-5xl text-3xl text-left text-ultramarine-50">Luaskan channel penjualan, tarik lebih banyak pelanggan!</h3>

            <Link href="https://app.kloola.id/register" target="_blank" passHref>
              <Button size="lg" className="m-auto !text-[1.25rem]">
                Coba Secara Gratis
              </Button>
            </Link>
          </div>

          <div className="flex-grow xl:min-w-[438px] min-w-[288px]">
            <img
              src="/images/solution-illust.svg"
              alt="luaskan channel penjualan tarik lebih banyak pelanggan"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SolutionSection;
