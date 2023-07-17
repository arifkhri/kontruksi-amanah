import lottieProduk from '../../../../public/lottie/produk.json';
import { TabsContentBase } from './TabsContentBase';

export default function TabsContentProduct(props: {
  active: boolean;
  onAnimEnd: () => void;
}) {
  return (
    <TabsContentBase
      title="Produk jualan dikelola sekaligus"
      desc="Mengurus toko di Clodeo untuk semua marketplace."
      lottieAnimation={lottieProduk}
      {...props}
    />
  );
}
