import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Container from "../../Shared/Container";
import Header from "../../Header";
import Logo from "../../Logo/Logo";
import css from "./SharedLayout.module.css";
const SharedLayout: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo />
        <nav>
          <NavLink to="/" end className={css.NavLink}>
            Home
          </NavLink>
          <NavLink to="/trips" className={css.NavLink}>
            Trips
          </NavLink>
          <NavLink to="/about" className={css.NavLink}>
            About
          </NavLink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
export default SharedLayout;
