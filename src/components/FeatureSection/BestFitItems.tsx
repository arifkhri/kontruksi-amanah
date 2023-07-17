import { CSSProperties, ReactNode } from 'react';

interface BestFitItemProps {
  image: string;
  altImage: string;
  title: string;
  desc: ReactNode;
  imgStyle?: CSSProperties;
  comingSoon?: boolean;
}

export function BestFitItem(props: BestFitItemProps) {
  return (
    <div className="grid grid-cols-4 md:px-6 md:py-6 px-4 py-3 gap-3 lg:gap-1 text-left items-center">
      <img src={props.image} alt={props.altImage} />
      <div className="grid grid-cols-1 gap-2 col-span-3">
        <h5 className="font-bold md:text-xl text-lg text-white">{props.title}</h5>
        <p className="md:text-lg text-md text-[#DBE0E3]">{props.desc}</p>
      </div>
    </div>
  );
}
