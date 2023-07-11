import { Category } from "@prisma/client";
import { useState } from "react";
import style from "~/styles/components/Hamburger.module.scss";

type HamburgerProps = {
  allCategories?: Category[];
  selectedCategory: Category | "all";
  onClickButton: (category: Category | "all") => void;
};

export const Hamburger: React.FC<HamburgerProps> = (props) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <>
      <div className={style.icon} onClick={() => setIsOpenMenu(true)}>
        <span className={style.hamburger_bar}></span>
        <span className={style.hamburger_bar}></span>
        <span className={style.hamburger_bar}></span>
      </div>
      <div className={style.menu} data-is-open={`${isOpenMenu}`}>
        <div className={style.close} onClick={() => setIsOpenMenu(false)}>
          <span className={style.close_bar}></span>
          <span className={style.close_bar}></span>
        </div>
        <button
          className={
            props.selectedCategory === "all"
              ? `${style.category} ${style.active}`
              : style.category
          }
          onClick={() => {
            props.onClickButton("all");
            setIsOpenMenu(false);
          }}
        >
          ALL
        </button>
        {props.allCategories?.map((category) => (
          <button
            key={category.id}
            className={
              props.selectedCategory === category
                ? `${style.category} ${style.active}`
                : style.category
            }
            onClick={() => {
              props.onClickButton(category);
              setIsOpenMenu(false);
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
    </>
  );
};
