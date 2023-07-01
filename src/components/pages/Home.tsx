import style from "~/styles/pages/Home.module.scss";
import { SideBar } from "../elements/SideBar";
import { Card } from "../elements/Card";

export const HomePage: React.FC = () => {
  return (
    <div className={style.inner}>
      <SideBar />
      <main className={style.main}>
        <h1 className={style.heading}>All Tools</h1>
        <p className={style.description}>
          ウェブ開発に役立つサービスやツールを紹介するポータルサイト
        </p>
        <div className={style.list}>
          {[...Array(30)].map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </main>
    </div>
  );
};
