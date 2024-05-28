import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Home: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Home Page</h1>
      {/* <Hero />
      <TripsNavigation />
      <TestComponent />
      <Hero /> */}
    </HelmetProvider>
  );
};

export default Home;
