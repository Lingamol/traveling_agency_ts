import React from "react";
import css from "./Container.module.css";

type Props = { children: React.ReactNode };

const Container: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className={css.Container}>
      {/* <h1>Container</h1> */}
      {children}
    </div>
  );
};
export default Container;
