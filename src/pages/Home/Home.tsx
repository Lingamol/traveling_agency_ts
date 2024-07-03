import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Container from "../../components/Shared/Container";

// import Hero from "../../components/Hero";
const Home: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        {/* <Hero /> */}
        {/* <Hero />
      <TripsNavigation />
      <TestComponent />
      <Hero /> */}
        {/* <div style={{ paddingTop: "120px" }}> */}
        {/* <PageContainer> */}
        <h1>Home Page</h1>
        {/* </PageContainer> */}
        {/* </div> */}

        <div style={{ height: "1700px", backgroundColor: "tomato" }}></div>
      </Container>
    </HelmetProvider>
  );
};

export default Home;
