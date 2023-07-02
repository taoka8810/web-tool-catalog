import { Category } from "@prisma/client";
import style from "~/styles/components/SideBar.module.scss";
import { api } from "~/utils/api";

type SideBarProps = {
  allCategories?: Category[];
  selectedCategory: Category | "all";
  onClickButton: (category: Category | "all") => void;
};

export const SideBar: React.FC<SideBarProps> = (props) => {
  return (
    <aside className={style.sidebar}>
      <div className={style.categories}>
        <button
          className={
            props.selectedCategory === "all"
              ? `${style.category} ${style.active}`
              : style.category
          }
          onClick={() => props.onClickButton("all")}
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
            onClick={() => props.onClickButton(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </aside>
  );
};
