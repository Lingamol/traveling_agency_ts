import React from "react";

import css from "./SubscribeSocial.module.scss";
import Social from "../../Social/Social.type";

type Props = { list: Social[] };

const SubscribeSocial: React.FC<Props> = ({ list }) => {
  return (
    <ul className={css.list}>
      {list.map((item) => (
        <li key={item.title} className={css.item}>
          <a href="#" target="_blank" className={css.link}>
            <svg className={css.icon}>
              <use xlinkHref={`icons/symbol-defs.svg#${item.iconName}`} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SubscribeSocial;
