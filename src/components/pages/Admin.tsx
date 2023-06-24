import { ChangeEvent, useEffect, useState } from "react";

import { Layout } from "../elements/Layout";
import style from "~/styles/pages/Admin.module.scss";
import { getImage, uploadImage } from "~/utils/storage";
import { api } from "~/utils/api";
import { Category, SubCategory } from "@prisma/client";

export const AdminPage: React.FC = () => {
  const [toolName, setToolName] = useState<string>();
  const [iconURL, setIconURL] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [category, setCategory] = useState<Category>();
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);

  const allCategories = api.category.index.useQuery().data;
  const allSubCategories = api.subCategory.index.useQuery().data;

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

  // サブカテゴリー
  const changeSubCategoryForm = (subCategoryId: number, isChecked: boolean) => {
    allSubCategories?.forEach((subCategory) => {
      if (subCategoryId === subCategory.id) {
        if (isChecked) {
          setSubCategories((prev) => [...prev, subCategory]);
          return;
        } else {
          setSubCategories((prev) =>
            prev.filter((item) => item !== subCategory)
          );
        }
      }
    });
  };

  return (
    <Layout>
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
            <select
              onChange={(e) => changeCategoryForm(Number(e.target.value))}
            >
              {allCategories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
          <label className={style.item}>
            <span>サブカテゴリー</span>
            {allSubCategories?.map((subCategory) => (
              <label key={subCategory.id}>
                <input
                  type="checkbox"
                  value={subCategory.id}
                  onChange={(e) => {
                    changeSubCategoryForm(
                      Number(e.target.value),
                      e.target.checked
                    );
                  }}
                />
                {subCategory.name}
              </label>
            ))}
          </label>
          <label className={style.item}>
            <span>アイコン</span>
            <input
              type="file"
              accept=".jpg,.png,.svg"
              onChange={(e) => uploadImage(e).then((url) => setIconURL(url))}
              required
            />
          </label>
          <button>登録</button>
        </form>
      </main>
    </Layout>
  );
};
