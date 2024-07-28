import React from "react";
import css from "./TripsNavigation.module.scss";
import TripCategory from "./Trips.type";
import CategoryIcon from "../CategoryIcon";

type Props = { categoryList: TripCategory[] };

const TripsNavigation: React.FC<Props> = ({ categoryList }) => {
  return (
    <ul className={css["nav-list"]}>
      {categoryList.map((category) => (
        <li key={category.id} className={css["nav-item"]}>
          {/* <CategoryIcon imgUrl={category.imgUrl} alt={category.title} /> */}
          <svg className={css.icon}>
            <use xlinkHref={`icons/symbol-defs.svg#${category.imgUrl}`} />
          </svg>
          <div className={css.title}>{category.title}</div>
        </li>
      ))}
    </ul>
  );
};

export default TripsNavigation;
