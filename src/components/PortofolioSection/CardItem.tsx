import styles from './style.module.scss';

interface CardItemProps {
  image: string;
  altImage: string;
  title: string;
}

export function CardItem(props: CardItemProps) {
  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg rounded-lg ${styles['card-item']}`} style={{backgroundImage: `url("${props.image}")`}}>
      <div className="px-6 py-4">
        <div className={`font-bold text-xl mb-2 ${styles['title']}`}>{props.title}</div>
      </div>
    </div>
  );
}
