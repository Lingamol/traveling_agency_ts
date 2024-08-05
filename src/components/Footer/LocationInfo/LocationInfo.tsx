import React from "react";
// import useMatchMedia from "../../../hooks/useMatchMedia";
import css from "./LocationInfo.module.scss";

type Props = { isDesktop: boolean };

const LocationInfo: React.FC<Props> = ({ isDesktop }) => {
  //   const { isDesktop } = useMatchMedia();
  return (
    <div className={css.item}>
      {isDesktop! && <span className={css.title}>Адреса</span>}
      <div className={css["item-content"]}>
        <svg className={css.icon}>
          <use xlinkHref={`icons/symbol-defs.svg#icon-location-pin`} />
        </svg>
        <div className={css.info}>
          <span className={css.text}>м.Вінниця </span>
          <span>вул.Соборна 7</span>
        </div>
      </div>
    </div>
  );
};
export default LocationInfo;
