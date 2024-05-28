import React from "react";
import { useParams } from "react-router-dom";

const TripDetails: React.FC = () => {
  const { tripId } = useParams<{ tripId: string }>();
  return <div>Now showing trip with id - {tripId}</div>;
};
export default TripDetails;
