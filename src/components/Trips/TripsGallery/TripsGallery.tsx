import React from "react";

import css from "./TripsGallery.module.scss";
import Trip from "./TripCard/Trip";
import TripCard from "./TripCard";

type Props = { tripsList: Trip[] };
const TripsGallery: React.FC<Props> = ({ tripsList }) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {tripsList.map((item) => (
          <li key={item.id}>
            <TripCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripsGallery;
