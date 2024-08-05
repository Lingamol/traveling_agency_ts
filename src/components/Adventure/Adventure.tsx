import React from "react";

import css from "./Adventure.module.scss";
import { useNavigate } from "react-router-dom";

const Adventure: React.FC = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/trips");
  };
  return (
    <section className={css.adventure}>
      <h2 className={css.title}>Досить сидіти вдома!</h2>
      <button type="button" className={css.button} onClick={handleOnClick}>
        Вперед за пригодами!
      </button>
    </section>
  );
};
export default Adventure;
