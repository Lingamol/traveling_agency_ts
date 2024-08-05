import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Container from "../../components/Shared/Container";
import Hero from "../../components/Hero";
import TripsNavigation from "../../components/Trips/TripsNavigation";
import TripsGrid from "../../components/Trips/TripsGrid";
import AboutUs from "../../components/AboutUs";
import StayTuned from "../../components/StayTuned";
import Adventure from "../../components/Adventure";
import categoryList from "../../MockData/categoryList";
import aboutList from "../../MockData/aboutList";
import reviewList from "../../MockData/reviewList";
import ReviewsSlider from "../../components/ReviewsSlider";

// import Hero from "../../components/Hero";
const Home: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <Container>
        <TripsNavigation categoryList={categoryList} />
        {/* <LookingTrips /> */}
        <TripsGrid />
        {/* <div style={{ paddingTop: "120px" }}> */}
        {/* <PageContainer> */}
        {/* <h1>Home Page</h1> */}
        {/* </PageContainer> */}
        {/* </div> */}

        {/* <div style={{ height: "1700px", backgroundColor: "tomato" }}></div> */}
      </Container>
      <AboutUs list={aboutList} />
      <StayTuned />
      {/* <Container> */}
      <ReviewsSlider reviewList={reviewList} />
      {/* </Container> */}

      <Adventure />
    </HelmetProvider>
  );
};

export default Home;
