import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PageContainer from "../../components/PageContainer";
import Container from "../../components/Shared/Container";

import css from "./Trips.module.scss";
import TripsSort from "../../components/Trips/TripsSort";

import TripsGallery from "../../components/Trips/TripsGallery";
import tripsList from "../../MockData/tripsList";
import tripFilter from "../../MockData/tripFilter";

const Trips: React.FC = () => {
  //   const { isDesktop } = useMatchMedia();
  return (
    <HelmetProvider>
      <Helmet>
        <title>Trips</title>
      </Helmet>
      <PageContainer>
        <Container>
          <div className={css.wrapper}>
            <h1 className={css.header}>Наші подорожі</h1>
            <TripsSort sortList={tripFilter} />
          </div>
          <TripsGallery tripsList={tripsList} />
        </Container>
      </PageContainer>
    </HelmetProvider>
  );
};
export default Trips;
