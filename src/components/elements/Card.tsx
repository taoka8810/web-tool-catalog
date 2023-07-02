import Image from "next/image";
import style from "~/styles/components/Card.module.scss";
import useSWR from "swr";

type CardProps = {
  name: string;
  provider: string;
  description: string;
  icon: string;
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
      <div className={style.head}>
        <div className={style.icon}>
          <img src={props.icon} alt="logo" width={35} height={35} />
        </div>
        <div>
          <h2 className={style.toolname}>{props.name}</h2>
          <p className={style.provider}>{`by ${props.provider}`}</p>
        </div>
      </div>
      <p className={style.description}>{props.description}</p>
    </a>
  );
};
