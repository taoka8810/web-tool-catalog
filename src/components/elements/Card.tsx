import Image from "next/image";
import style from "~/styles/components/Card.module.scss";

export const Card: React.FC = () => {
  return (
    <article className={style.card}>
      <div className={style.head}>
        <div className={style.icon}>
          <Image src="/wordpress_logo.png" alt="logo" width={40} height={40} />
        </div>
        <div>
          <h2 className={style.toolname}>WordPress</h2>
          <p className={style.provider}>by WordPress Foundation</p>
        </div>
      </div>
      <p className={style.description}>
        世界で最も利用されているオープンソースのCMS
      </p>
    </article>
  );
};
