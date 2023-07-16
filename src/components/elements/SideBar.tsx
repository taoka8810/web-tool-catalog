import { useState } from "react";
import style from "~/styles/components/SideBar.module.scss";
import { Category } from "~/utils/types";

type SideBarProps = {
  allCategories?: Category[];
  selectedCategory: Category | "all";
  onClickButton: (category: Category | "all") => void;
};

export const SideBar: React.FC<SideBarProps> = (props) => {
  const [searchText, setSearchText] = useState<string>();
  return (
    <aside className={style.sidebar}>
      {/* <div className={style.search}>
        <input
          type="text"
          placeholder="Search Tools"
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && console.log(searchText)}
        />
      </div> */}
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
