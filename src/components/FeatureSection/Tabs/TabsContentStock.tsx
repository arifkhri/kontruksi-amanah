import lottieStok from '../../../../public/lottie/stok.json';
import { TabsContentBase } from './TabsContentBase';

export default function TabsContentStock(props: {
  active: boolean;
  onAnimEnd: () => void;
}) {
  return (
    <TabsContentBase
      title="Sekali update stok, untuk semua toko"
      desc="Update stok lebih mudah dilakukan serentak."
      lottieAnimation={lottieStok}
      {...props}
    />
  );
}
