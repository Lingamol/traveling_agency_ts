import React from "react";
import css from "./AboutInfoList.module.scss";
import AboutInfoItem from "../AboutInfoItem";
import About from "../AboutInfoItem/AboutInfoItem.type";

type Props = { list: About[] };

const AboutInfoList: React.FC<Props> = ({ list }) => {
  return (
    <ul className={css.container}>
      {list.map((item) => (
        <li key={item.id}>
          <AboutInfoItem item={item} />
        </li>
      ))}
    </ul>
  );
};
export default AboutInfoList;
