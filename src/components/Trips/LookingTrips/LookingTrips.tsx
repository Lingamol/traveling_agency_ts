import React from "react";

import css from "./LookingTrips.module.scss";

const LookingTrips: React.FC = () => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <button className={`${css.button} ${css.look}`}>
          <span className={css["look-title"]}>Новини</span>
        </button>
      </li>
      <li className={css.item}>
        <button className={`${css.button} ${css.calendar}`}>
          <svg className={css["calendar-icon"]}>
            <use xlinkHref={`icons/symbol-defs.svg#icon-47`} />
          </svg>
          <span className={css["calendar-title"]}>Календар подорожей</span>
        </button>
      </li>
      <li className={css.item}>
        <button className={`${css.button} ${css.faq}`}>
          <span>FAQ</span>
        </button>
      </li>
      <li className={css.item}>
        <button className={`${css.button} ${css.party}`}>
          <span>Тревел Корпоративи</span>
        </button>
      </li>
    </ul>
  );
};

export default LookingTrips;
