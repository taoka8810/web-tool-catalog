// import { useState } from "react";
// import style from "~/styles/pages/Admin.module.scss";
// import { api } from "~/utils/api";
// import { Category } from "@prisma/client";
// import { supabase } from "~/utils/supabase";

// export const AdminPage: React.FC = () => {
//   const [toolName, setToolName] = useState<string>();
//   const [description, setDescription] = useState<string>();
//   const [category, setCategory] = useState<Category>();
//   const [provider, setProvider] = useState<string>();
//   const [url, setURL] = useState<string>();

//   const allCategories = api.category.index.useQuery().data;

//   // メインカテゴリー
//   const changeCategoryForm = (categoryId: number) => {
//     allCategories?.forEach((category) => {
//       if (categoryId === category.id) {
//         setCategory(category);
//         return;
//       }
//     });
//   };

//   const handleSubmit = async () => {
//     if (!toolName || !description || !category || !provider || !url) return;
//     await supabase
//       .from("Tool")
//       .insert({
//         name: toolName,
//         description: description,
//         provider: provider,
//         categoryId: category.id,
//         url: url,
//       })
//       .then((data) => {});
//   };

//   return (
//     <main className={style.inner}>
//       <h1 className={style.heading}>管理画面</h1>

//       <div className={style.form}>
//         <label className={style.item}>
//           <span>ツール名</span>
//           <input
//             type="text"
//             onChange={(e) => setToolName(e.target.value)}
//             required
//           />
//         </label>
//         <label className={style.item}>
//           <span>提供者</span>
//           <input
//             type="text"
//             onChange={(e) => setProvider(e.target.value)}
//             required
//           />
//         </label>
//         <label className={style.item}>
//           <span>URL</span>
//           <input
//             type="text"
//             onChange={(e) => setURL(e.target.value)}
//             required
//           />
//         </label>
//         <label className={style.item}>
//           <span>説明文</span>
//           <textarea
//             rows={5}
//             onChange={(e) => setDescription(e.target.value)}
//           ></textarea>
//         </label>
//         <label className={style.item}>
//           <span>カテゴリー</span>
//           <select onChange={(e) => changeCategoryForm(Number(e.target.value))}>
//             <option>選択する</option>
//             {allCategories?.map((category) => (
//               <option key={category.id} value={category.id}>
//                 {category.name}
//               </option>
//             ))}
//           </select>
//         </label>
//         <button onClick={async () => await handleSubmit()}>登録</button>
//       </div>
//     </main>
//   );
// };
