import type { CSSMotionProps } from 'rc-motion';

export const ordersPerMonthOptions = [
  {
    label: '1-10',
    value: '1-10'
  },
  {
    label: '11-100',
    value: '11-100'
  },
  {
    label: '101-500',
    value: '101-500'
  },
  {
    label: '501-1000',
    value: '501-1000'
  },
  {
    label: '1000+',
    value: '1000+'
  },
];

export const channelOptions = [
  {
    label: 'Lazada',
    value: 'Lazada',
  },
  {
    label: 'Shopee',
    value: 'Shopee',
  },
  {
    label: 'Bukalapak',
    value: 'Bukalapak',
  },
  {
    label: 'Zalora',
    value: 'Zalora',
  },
  {
    label: 'Facebook Shop',
    value: 'Facebook Shop',
  },
  {
    label: 'Whatsapp Shop',
    value: 'Whatsapp Shop',
  },
  {
    label: 'Tokopedia',
    value: 'Tokopedia',
  },
  {
    label: 'Blibli',
    value: 'Blibli',
  },
  {
    label: 'JDID',
    value: 'JDID',
  },
  {
    label: 'Tiktok Shop',
    value: 'Tiktok Shop',
  },
  {
    label: 'Instagram Shop',
    value: 'Instagram Shop',
  },
  {
    label: 'Offline',
    value: 'Offline',
  },
];

export const categorOptions = [
  {
    label: 'Fashion (pakaian, sepatu, tas, dsb)',
    value: 'Fashion (pakaian, sepatu, tas, dsb)',
  },
  {
    label: 'Kosmetik/ skin care',
    value: 'Kosmetik/ skin care',
  },
  {
    label: 'Food & Beverage (Makanan)',
    value: 'Food & Beverage (Makanan)',
  },
  {
    label: 'Obat-Obatan & jamu',
    value: 'Obat-Obatan & jamu',
  },
  {
    label: 'Peralatan rumah tangga',
    value: 'Peralatan rumah tangga',
  },
  {
    label: 'Stuffs & aksesoris',
    value: 'Stuffs & aksesoris',
  },
  {
    label: 'Peralatan Otomotif',
    value: 'Peralatan Otomotif',
  },
  {
    label: 'Peralatan Hobi dan Olahraga',
    value: 'Peralatan Hobi dan Olahraga',
  },
  {
    label: 'Agribisnis (pertanian, perikanan, perkebunan, peternakan)',
    value: 'Agribisnis (pertanian, perikanan, perkebunan, peternakan)',
  },
  {
    label: 'Industri konveksi (pakaian, tas, sepatu, etc)',
    value: 'Industri konveksi (pakaian, tas, sepatu, etc)',
  },
  {
    label: 'Jasa',
    value: 'Jasa',
  },
  {
    label: 'Other',
    value: 'Other',
  }
];


export const motion: CSSMotionProps = {
  motionName: 'rc-notification-fade',
  motionAppear: true,
  motionEnter: true,
  motionLeave: true,
  onLeaveStart: (ele) => {
    const { offsetHeight } = ele;
    return { height: offsetHeight };
  },
  onLeaveActive: () => ({ height: 0, opacity: 0, margin: 0 }),
};

