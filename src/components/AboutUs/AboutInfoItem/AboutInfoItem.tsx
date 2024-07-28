import React from "react";
import css from "./AboutInfoItem.module.scss";
import About from "./AboutInfoItem.type";

type Props = { item: About };

const AboutInfoItem: React.FC<Props> = ({ item }) => {
  const { title, iconName, infoList } = item;
  return (
    <div className={css.item}>
      <div className={css.iconWrapper}>
        <svg className={css.icon}>
          <use xlinkHref={`icons/symbol-defs.svg#${iconName}`} />
        </svg>
      </div>

      <div className={css.tumb}>
        <p>{title}</p>
        <ul>
          {infoList.map((item) => (
            <li key={item.caption} className={css.itemInfo}>
              <span className={css.amount}>{item.amount} </span>
              <span>{item.caption}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutInfoItem;
