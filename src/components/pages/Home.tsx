import style from "~/styles/pages/Home.module.scss";
import { SideBar } from "../elements/SideBar";
import { Card } from "../elements/Card";
import { useState } from "react";
import { Category } from "@prisma/client";
import { api } from "~/utils/api";

export const HomePage: React.FC = () => {
  const [category, setCategory] = useState<Category | "all">("all");

  const allTools = api.tool.index.useQuery().data;

  const handleChangeCategory = (category: Category | "all") => {
    setCategory(category);
  };

  return (
    <div className={style.inner}>
      <SideBar
        selectedCategory={category}
        onClickButton={handleChangeCategory}
      />
      <main className={style.main}>
        <h1 className={style.heading}>
          {category === "all" ? "All Tools" : category.name}
        </h1>
        <p className={style.description}>
          {category === "all"
            ? "ウェブ開発に役立つサービスやツールを紹介するポ ータルサイト"
            : category.description}
        </p>
        <div className={style.list}>
          {allTools?.map((tool) => (
            <Card key={tool.id} {...tool} />
          ))}
        </div>
      </main>
    </div>
  );
};
