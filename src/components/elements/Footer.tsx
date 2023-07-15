import Image from "next/image";
import style from "~/styles/components/Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div></div>
      <div className={style.profile}>
        <small className={style.copyright}>2023 taoka8810</small>
        <a
          className={style.icon}
          href="https://twitter.com/yasai_tarinai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/twitter.svg" alt="twitter" width={15} height={15} />
        </a>
        <a
          className={style.icon}
          href="https://github.com/taoka8810"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/github.svg" alt="github" width={15} height={15} />
        </a>
        <a
          className={style.icon}
          href="https://pennn.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/house-solid.svg"
            alt="my homepage"
            width={15}
            height={15}
          />
        </a>
      </div>
      <div className={style.favicon}>
        <small>
          favicon by{" "}
          <a
            href="https://vectorshelf.com/fo097/"
            target="_blank"
            rel="noopener noreferrer"
          >
            vectorShelf
          </a>
        </small>
      </div>
    </footer>
  );
};
