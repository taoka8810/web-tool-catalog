import style from "~/styles/pages/Home.module.scss";
import { SideBar } from "../elements/SideBar";
import { Card } from "../elements/Card";
import { useState } from "react";
import { Hamburger } from "../elements/Hamburger";
import { Category, ToolWithOGP } from "~/utils/types";
import { WelcomeMessage } from "../elements/WelcomeMessage";

export type HomeProps = {
  allTools: ToolWithOGP[];
  allCategories: Category[];
};

export const HomePage: React.FC<HomeProps> = ({ allTools, allCategories }) => {
  const [category, setCategory] = useState<Category | "all">("all");

  const handleChangeCategory = (category: Category | "all") => {
    setCategory(category);
  };

  return (
    <div className={style.inner}>
      <div className={style.hamburger}>
        <Hamburger
          allCategories={allCategories}
          selectedCategory={category}
          onClickButton={handleChangeCategory}
        />
      </div>
      <SideBar
        allCategories={allCategories}
        selectedCategory={category}
        onClickButton={handleChangeCategory}
      />
      <main className={style.main}>
        <WelcomeMessage />
        <h1 className={style.heading}>
          {category === "all" ? "All Tools" : category.name}
        </h1>
        <p className={style.description}>
          {category === "all" ? "" : category.description}
        </p>
        <div className={style.list}>
          {allTools
            ?.filter((tool) =>
              category === "all" ? tool : tool.category.id === category.id
            )
            .map((tool) => (
              <Card key={tool.id} {...tool} />
            ))}
        </div>
      </main>
    </div>
  );
};
