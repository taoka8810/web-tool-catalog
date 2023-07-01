import style from "~/styles/components/SideBar.module.scss";

export const SideBar: React.FC = () => {
  return (
    <aside className={style.sidebar}>
      <div className={style.categories}>
        <button className={`${style.category} ${style.active}`}>ALL</button>
        <button className={style.category}>Framework</button>
        <button className={style.category}>CMS</button>
        <button className={style.category}>Database</button>
        <button className={style.category}>Storage</button>
        <button className={style.category}>Authentication</button>
        <button className={style.category}>Hosting</button>
      </div>
    </aside>
  );
};
