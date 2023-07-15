import Image from "next/image";
import style from "~/styles/components/Card.module.scss";
import { ToolWithOGP } from "~/utils/types";

type CardProps = ToolWithOGP;

export const Card: React.FC<CardProps> = (props) => {
  return (
    <a
      className={style.card}
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={style.image}>
        <Image
          src={props.image}
          alt="eyecatch"
          width={288.98}
          height={151.71}
        />
      </div>
      <div className={style.info}>
        <h2 className={style.toolname}>{props.name}</h2>
        <p className={style.category} data-type={props.category.slug}>
          {props.category.slug}
        </p>
        <p className={style.description}>{props.description}</p>
      </div>
    </a>
  );
};
