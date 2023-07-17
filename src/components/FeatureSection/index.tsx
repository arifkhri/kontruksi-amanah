import Container from '../Container';
import { BestFitItem } from './BestFitItems';

import styles from './style.module.scss';

export default function FeatureSection() {
  return (
    <section id="feature">
      <Container className={styles['feature-section']}>
        <div className="px-4">
          <h3 className="text-center mb-16 text-ultramarine-50">
            Cocok untuk seller yang...
          </h3>
          <div className="grid grid-flow-row grid-cols-1 gap-x-10 gap-y-5 lg:grid-cols-2">
            <BestFitItem
              image="/images/feature-best-fit-01.svg"
              altImage="berjualan di shopee"
              title="Berjualan di Shopee"
              desc="Semua tokomu di Shopee akan diurus sekaligus tanpa bikin kamu kerepotan lagi."
            />
            <BestFitItem
              image="/images/feature-best-fit-02.svg"
              altImage="berjualan di tokopedia"
              title="Berjualan di Tokopedia"
              desc="Mengurus lebih dari satu toko di Tokopedia makin efektif kamu lakukan."
            />
            <BestFitItem
              image="/images/feature-best-fit-03.svg"
              altImage="berjualan di tiktok"
              title="Berjualan di Tiktok"
              desc="Siap bantuin kamu kelola toko di Social Commerce terbesar se-Asia Tenggara!"
            />
            <BestFitItem
              image="/images/feature-best-fit-04.svg"
              altImage="ingin mengembangkan bisnis"
              title="Ingin mengembangkan bisnis"
              desc="Memungkinkan kamu untuk meluaskan pemasaran toko di banyak marketplace."
            />
            <BestFitItem
              image="/images/feature-best-fit-05.svg"
              altImage="punya tim dalam jumlah kecil"
              title="Punya tim dalam jumlah kecil"
              desc="Untuk bisnis yang baru merintis, tidak sulit mengelola toko sendiri tanpa bantuan orang lain."
            />
            <BestFitItem
              image="/images/feature-best-fit-06.svg"
              altImage="mengurus berbagai stok inventory"
              title="Mengurus berbagai stok inventory"
              desc="Mempercepat update stok karena dilakukan secara otomatis dan real-time."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
