import React from "react";
import css from "./Header.module.css";
type Props = { children: React.ReactNode };

const Header: React.FC<Props> = ({ children }: Props) => {
  return <div className={css.Header}>{children}</div>;
};
export default Header;
