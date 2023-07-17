import lottieOrder from '../../../../public/lottie/order.json';
import { TabsContentBase } from './TabsContentBase';

export default function TabsContentOrder(props: {
  active: boolean;
  onAnimEnd: () => void;
}) {
  return (
    <TabsContentBase
      title="Pengelolaan pesanan jadi lebih efisien"
      desc="Orderan dikelola sampai pada proses pengiriman."
      lottieAnimation={lottieOrder}
      {...props}
    />
  );
}
