import React from "react";
// import useMatchMedia from "../../../hooks/useMatchMedia";
import css from "./Schedule.module.scss";

type Props = { isDesktop: boolean };

const Schedule: React.FC<Props> = ({ isDesktop }) => {
  return (
    <div className={css.item}>
      {isDesktop! && <span className={css.title}>Графік роботи</span>}
      <div className={css["item-content"]}>
        <svg className={css.icon}>
          <use xlinkHref={`icons/symbol-defs.svg#icon-calendar`} />
        </svg>
        <div className={css.schedule}>
          <span className={css.text}>Пн. - Пт. 10.00 - 20.00 </span>
          <span>Сб. - Нд. 10.00 - 17.00</span>
        </div>
      </div>
    </div>
  );
};
export default Schedule;
