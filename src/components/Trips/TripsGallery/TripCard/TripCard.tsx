import React from "react";
import { NavLink } from "react-router-dom";

import css from "./TripCard.module.scss";
import Trip from "./Trip";
import TripContent from "./TripContent";

type Props = { item: Trip };

const TripCard: React.FC<Props> = ({ item }) => {
  return (
    <div className={css.card}>
      <NavLink to={`/trips/${item.id}`}>
        <img src={item.imgURL} alt="trip" className={css.img} />
      </NavLink>
      {/* <h2>{item.title}</h2>
        <span>{item.price.member}</span>
        <span>{item.price.stoc}</span> */}
      <TripContent item={item} />
    </div>
  );
};

export default TripCard;
