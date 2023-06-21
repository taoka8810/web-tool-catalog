import { ChangeEvent, useState } from "react";
import { Layout } from "../elements/Layout";
import style from "~/styles/pages/Admin.module.scss";
import { getImage, uploadImage } from "~/utils/storage";

export const AdminPage: React.FC = () => {
  const [iconURL, setIconURL] = useState<string>();

  return (
    <Layout>
      <main className={style.inner}>
        <h1 className={style.heading}>管理画面</h1>
        <form className={style.form}>
          <input
            type="file"
            accept=".jpg,.png,.svg"
            onChange={(e) => uploadImage(e).then((url) => setIconURL(url))}
            required
          />
        </form>
      </main>
    </Layout>
  );
};
