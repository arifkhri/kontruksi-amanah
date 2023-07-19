import { ReactNode } from 'react';
import styles from './style.module.scss';

interface ServiceItemProps {
  image: string;
  altImage: string;
  title: string;
  desc: ReactNode;
}

export function ServiceItem(props: ServiceItemProps) {
  return (
    <div className={`mt-20 flex lg:flex-row flex-col gap-x-4 items-center rounded-[20px] p-6 ${styles['service-item']}`}>
      {/* <img src={props.image} alt={props.altImage} /> */}
      <div className="lg:text-left text-center">
        <h5 className="mb-2">{props.title}</h5>
        <p className="mb-2 text-medium text-cadet-900">{props.desc}</p>
      </div>
    </div>
  );
}


