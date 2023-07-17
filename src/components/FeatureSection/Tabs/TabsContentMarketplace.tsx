import lottieMarketplace from '../../../../public/lottie/marketplace.json';
import { TabsContentBase } from './TabsContentBase';

export default function TabsContentMarketplace(props: {
  active: boolean;
  onAnimEnd: () => void;
}) {
  return (
    <TabsContentBase
      title="Mengatur penjualan dengan Integrasi Toko"
      desc="Bersamaan kendalikan orderan dari semua toko."
      lottieAnimation={lottieMarketplace}
      {...props}
    />
  );
}
