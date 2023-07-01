import { useState } from "react";
import style from "~/styles/pages/Admin.module.scss";
import { api } from "~/utils/api";
import { Category } from "@prisma/client";

export const AdminPage: React.FC = () => {
  const [toolName, setToolName] = useState<string>();
  const [iconURL, setIconURL] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [category, setCategory] = useState<Category>();

  console.log(toolName);
  console.log(iconURL);
  console.log(description);
  console.log(category);

  const allCategories = api.category.index.useQuery().data;

  // メインカテゴリー
  const changeCategoryForm = (categoryId: number) => {
    allCategories?.forEach((category) => {
      if (categoryId === category.id) {
        setCategory(category);
        return;
      }
    });
  };

  const handleSubmit = () => {};

  return (
    <main className={style.inner}>
      <h1 className={style.heading}>管理画面</h1>

      <form className={style.form}>
        <label className={style.item}>
          <span>ツール名</span>
          <input
            type="text"
            onChange={(e) => setToolName(e.target.value)}
            required
          />
        </label>
        <label className={style.item}>
          <span>説明文</span>
          <textarea
            rows={5}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
        <label className={style.item}>
          <span>カテゴリー</span>
          <select onChange={(e) => changeCategoryForm(Number(e.target.value))}>
            <option>選択する</option>
            {allCategories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <label className={style.item}>
          <span>アイコン</span>
          <input
            type="file"
            accept=".jpg,.png,.svg"
            // onChange={(e) => uploadImage(e).then((url) => setIconURL(url))}
            required
          />
        </label>
        <button>登録</button>
      </form>
    </main>
  );
};
