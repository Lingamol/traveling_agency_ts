import TripFilter from "../components/Trips/TripsSort/TripFilter";

const tripFilter: TripFilter[] = [
  { id: "1", filterName: "По даті", value: "date" },
  { id: "2", filterName: "Новинки", value: "new" },
  { id: "3", filterName: "Орг. збір по зростанню", value: "tax asc" },
  { id: "4", filterName: "Орг. збір по спаданню", value: "tax desc" },
];
export default tripFilter;
