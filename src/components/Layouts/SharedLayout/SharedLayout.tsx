import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
// import Container from "../../Shared/Container";
import Header from "../../Header";
import Footer from "../../Footer";
// import PageContainer from "../../PageContainer";

// import Logo from "../../Logo/Logo";
// import css from "./SharedLayout.module.css";

const SharedLayout: React.FC = () => {
  return (
    <div>
      <Header />

      <Suspense fallback={null}>
        {/* <PageContainer> */}
        <Outlet />
        {/* </PageContainer> */}
      </Suspense>
      <Footer />
    </div>
  );
};
export default SharedLayout;
