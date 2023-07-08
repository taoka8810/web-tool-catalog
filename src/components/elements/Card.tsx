import Image from "next/image";
import style from "~/styles/components/Card.module.scss";
import useSWR from "swr";

type CardProps = {
  name: string;
  provider: string;
  description: string;
  image: string;
  url: string;
};

export const Card: React.FC<CardProps> = (props) => {
  return (
    <a
      className={style.card}
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={style.image}>
        <img src="/wordpress.png" alt="" />
      </div>
      <div className={style.info}>
        <h2 className={style.toolname}>{props.name}</h2>
        <p className={style.provider}>{`by ${props.provider}`}</p>
        <p className={style.description}>{props.description}</p>
      </div>
    </a>
  );
};
