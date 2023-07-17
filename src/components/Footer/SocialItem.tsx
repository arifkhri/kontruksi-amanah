type ImgType = 'ig' | 'in' | 'tw' | 'fb' | 'yt';
interface SocialItemProps {
  img: ImgType;
  url: string;
}

export default function SocialItem(props: SocialItemProps) {
  const { url, img } = props;

  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer" className="m-auto block w-max">
        <img src={`/images/${img}.svg`} alt={img}/>
      </a>
    </li>
  );
}