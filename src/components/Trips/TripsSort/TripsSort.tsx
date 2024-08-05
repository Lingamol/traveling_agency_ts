import React, { useState, useEffect } from "react";
import css from "./TripsSort.module.scss";
import TripFilter from "./TripFilter";

type Props = { sortList: TripFilter[] };

const TripsSort: React.FC<Props> = ({ sortList }) => {
  const [selectedTrip, setSelectedTrip] = useState<string>(sortList[0].value);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data for", selectedTrip);
      // Здесь выполните ваш асинхронный запрос
      // Например: await fetch(`/api/trips?filter=${selectedTrip}`);
    };

    fetchData();
  }, [selectedTrip]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTrip(e.target.value);
  };

  return (
    <div className={css.container}>
      <form>
        <select
          id="trips"
          name="trips"
          onChange={handleSelectChange}
          value={selectedTrip}
          className={css.select}
        >
          {sortList.map((item) => (
            <option
              key={item.id}
              value={item.value}
              className={`${css.option}
              `}
            >
              {item.filterName}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default TripsSort;
