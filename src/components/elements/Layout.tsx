import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
