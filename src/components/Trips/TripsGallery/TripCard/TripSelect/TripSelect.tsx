import React, { useState } from "react";

import css from "./TripSelect.module.scss";
import Schedule from "../Schedule";
type Props = { options: Schedule[] };
const TripSelect: React.FC<Props> = ({ options }) => {
  const [activeTrip, setActiveTrip] = useState(options[0].period);

  return (
    <form className={css.form}>
      <select
        className={css.select}
        value={activeTrip}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setActiveTrip(e.target.value)
        }
      >
        {options.map((trip) => (
          <option className={css.option} key={trip.id} value={trip.id}>
            {trip.period}
          </option>
        ))}
      </select>
    </form>
  );
};
export default TripSelect;
