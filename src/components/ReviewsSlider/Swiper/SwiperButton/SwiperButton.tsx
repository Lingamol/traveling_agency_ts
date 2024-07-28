import React from "react";

import css from "./SwiperButton.module.scss";

type Props = { type: string };

const SwiperButton: React.FC<Props> = ({ type }) => {
  return (
    <button
      type="button"
      className={`${css.button} ${type === "right" ? css.right : css.left}`}
    >
      {type}
    </button>
  );
};

export default SwiperButton;
