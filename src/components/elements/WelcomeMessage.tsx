import Image from "next/image";
import { useState } from "react";
import style from "~/styles/components/WelcomeMessage.module.scss";

export const WelcomeMessage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    isVisible && (
      <div className={style.heading}>
        <h1>Web Tool Portal</h1>
        <p>
          このサイトではWeb開発でよく利用されるツールやサービスを紹介しています。未知なるツールやサービスと出会うことで、より良いWeb開発のきっかけとなれれば幸いです。
        </p>
        <div className={style.icon} onClick={() => setIsVisible(false)}>
          <Image
            src="/xmark-solid.svg"
            alt="close button"
            width={20}
            height={20}
          />
        </div>
      </div>
    )
  );
};
