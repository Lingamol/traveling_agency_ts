import React from "react";

import css from "./TripPlaces.module.scss";

type Props = { places: number };
const TripPlaces: React.FC<Props> = ({ places }) => {
  return (
    <span
      className={`${css.places} ${
        places === 0
          ? css["no-available"]
          : places <= 20
          ? css.available
          : css.full
      }
      }}`}
    >
      {places === 0
        ? "немає місць"
        : places <= 20
        ? `залишилось ${places} місць`
        : "є вільні місця"}
    </span>
  );
};
export default TripPlaces;
