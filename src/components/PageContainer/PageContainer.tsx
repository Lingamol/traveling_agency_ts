import React from "react";
import css from "./PageContainer.module.scss";

type Props = { children: React.ReactNode };

const PageContainer: React.FC<Props> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};
export default PageContainer;
