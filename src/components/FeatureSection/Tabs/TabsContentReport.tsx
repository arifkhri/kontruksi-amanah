import lottieLaporan from '../../../../public/lottie/laporan.json';
import { TabsContentBase } from './TabsContentBase';

export default function TabsContentReport(props: {
  active: boolean;
  onAnimEnd: () => void;
}) {
  return (
    <TabsContentBase
      title="Laporan terlengkap pasti kamu dapatkan"
      desc="Untuk buat strategi peningkatan jualan di toko."
      lottieAnimation={lottieLaporan}
      {...props}
    />
  );
}
