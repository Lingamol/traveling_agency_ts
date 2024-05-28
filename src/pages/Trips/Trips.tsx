import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Trips: React.FC = () => {
  //   const { isDesktop } = useMatchMedia();
  return (
    <HelmetProvider>
      <Helmet>
        <title>Trips</title>
      </Helmet>

      <h1>TripsPage</h1>
    </HelmetProvider>
  );
};
export default Trips;
