import React from "react";
// import useMatchMedia from "../../../hooks/useMatchMedia";
import css from "./ContactInfo.module.scss";

type Props = { isDesktop: boolean };

const ContactInfo: React.FC<Props> = ({ isDesktop }) => {
  return (
    <div className={css.item}>
      {isDesktop! && <span className={css.title}>Телефони</span>}
      <div className={css["item-content"]}>
        <svg className={css.icon}>
          <use xlinkHref={`icons/symbol-defs.svg#icon-phone`} />
        </svg>
        <div className={css.info}>
          {/* <span className={css.text}>Пн. - Пт. 10.00 - 20.00 </span>
          <span>Сб. - Нд. 10.00 - 17.00</span> */}
          <a className={css.phone} href="tel:(098)782-71-77">
            (098)782-71-77
          </a>
          <a className={css.phone} href="tel:(073)782-71-77">
            (073)782-71-77
          </a>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
