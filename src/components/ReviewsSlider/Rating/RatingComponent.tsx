import React from "react";

import css from "./RatingComponent.module.scss";

import Rating from "./Rating.type";
type Props = { rating: Rating[] };
const RatingComponent: React.FC<Props> = ({ rating }) => {
  return (
    <ul className={css.rating}>
      {rating.map((item) => (
        <li key={item.title} className={css.item}>
          <span className={css.title}>{item.title}</span>
          <svg className={css["smile-icon"]}>
            <use xlinkHref={`icons/symbol-defs.svg#${item.rating}`} />
          </svg>
        </li>
      ))}
    </ul>
  );
};

export default RatingComponent;
