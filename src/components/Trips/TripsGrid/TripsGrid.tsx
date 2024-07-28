import React from "react";
// import css from "./TripsGrid.module.scss";
import css from "./TripsGrid.module.scss";

type Props = {};

const TripsGrid: React.FC<Props> = () => {
  return (
    <div className={css.container}>
      <div className={`${css["grid-item"]} ${css.look}`}>
        <span className={css["look-title"]}>Новини</span>
      </div>
      <div className={`${css["grid-item"]} ${css.calendar}`}>
        <svg className={css["calendar-icon"]}>
          <use xlinkHref={`icons/symbol-defs.svg#icon-47`} />
        </svg>
        <span className={css["calendar-title"]}>Календар подорожей</span>
      </div>
      <div className={`${css["grid-item"]} ${css.faq}`}>
        <span>FAQ</span>
      </div>
      <div className={`${css["grid-item"]} ${css.party}`}>
        <span>Тревел Корпоративи</span>
      </div>
    </div>
  );
};
export default TripsGrid;
