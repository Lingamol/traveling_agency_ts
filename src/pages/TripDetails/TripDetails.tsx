import React from "react";
import { useParams } from "react-router-dom";
import PageContainer from "../../components/PageContainer";

const TripDetails: React.FC = () => {
  const { tripId } = useParams<{ tripId: string }>();
  return (
    <PageContainer>
      <div>Now showing trip with id - {tripId}</div>
    </PageContainer>
  );
};
export default TripDetails;
