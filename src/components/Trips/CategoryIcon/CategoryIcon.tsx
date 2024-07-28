import React from "react";
import css from "./CategoryIcon.module.css";

type Props = { imgUrl: string; alt: string };
const CategoryIcon: React.FC<Props> = ({ imgUrl, alt }) => {
  return (
    <svg className={css.icon}>
      <use xlinkHref={`icons/symbol-defs.svg#icon-47`} />
    </svg>
  );
};
export default CategoryIcon;
