import React from "react";
// import useMatchMedia from "../../../hooks/useMatchMedia";
import css from "./SocialInfo.module.scss";
import Social from "../../Social/Social.type";

type Props = { isDesktop: boolean; socialList: Social[] };

const SocialInfo: React.FC<Props> = ({ isDesktop, socialList }) => {
  return (
    <div className={css.item}>
      {isDesktop! && <span className={css.title}>Графік роботи</span>}
      <ul className={css["item-content"]}>
        {socialList.map((item) => (
          <li key={item.title}>
            <svg className={css.icon}>
              <use xlinkHref={`icons/symbol-defs.svg#${item.iconName}`} />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SocialInfo;
