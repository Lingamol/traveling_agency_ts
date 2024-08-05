import React from "react";
import css from "./TripContent.module.scss";
import Trip from "../Trip";
import TripSelect from "../TripSelect";
import TripPlaces from "../TripPlaces";
import { useNavigate } from "react-router-dom";
import TripAssets from "../TripAssets";
type Props = { item: Trip };

const TripContent: React.FC<Props> = ({ item }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`./${item.id}`);
  };
  return (
    <div className={css.overlay}>
      {item.include.length > 0 && <TripAssets list={item.include} />}
      <div>
        <h2 className={css.title}>{item.title}</h2>
        <p className={css.description}>{item.description}</p>
      </div>
      <div>
        <div className={css["price-tumb"]}>
          <div className={css["price-wrapper"]}>
            <span className={css["price-member"]}>
              {item.price.member} {item.currency}
            </span>
            <span className={css["price-caption"]}>Учасник клубу</span>
          </div>
          <div className={css["price-wrapper"]}>
            <span className={css["price-stock"]}>
              {item.price.stoc} {item.currency}
            </span>
            <span className={css["price-caption"]}>Новачок</span>
          </div>
        </div>
        <div className={css.select}>
          <TripSelect options={item.schedule} />
        </div>
        <TripPlaces places={item.places} />
        <button className={css.button} type="button" onClick={onClick}>
          Деталі
        </button>
      </div>
    </div>
  );
};

export default TripContent;
