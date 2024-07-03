import React from "react";
import css from "./MainNavigation.module.scss";
import { NavLink } from "react-router-dom";

type Props = { onClick: () => void };
const MainNavigation: React.FC<Props> = ({ onClick }) => {
  return (
    <nav className={css.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${css["nav-link"]} ${css.active}` : css["nav-link"]
        }
        onClick={onClick}
      >
        home
      </NavLink>
      <NavLink
        to="/trips"
        className={({ isActive }) =>
          isActive ? `${css["nav-link"]} ${css.active}` : css["nav-link"]
        }
        onClick={onClick}
      >
        trips
      </NavLink>
      <NavLink
        to="/calendar"
        className={({ isActive }) =>
          isActive ? `${css["nav-link"]} ${css.active}` : css["nav-link"]
        }
        onClick={onClick}
      >
        calendar
      </NavLink>
      <NavLink
        to="/support"
        className={({ isActive }) =>
          isActive ? `${css["nav-link"]} ${css.active}` : css["nav-link"]
        }
        onClick={onClick}
      >
        support
      </NavLink>
      <NavLink
        to="/feedback"
        className={({ isActive }) =>
          isActive ? `${css["nav-link"]} ${css.active}` : css["nav-link"]
        }
        onClick={onClick}
      >
        feedback
      </NavLink>
      <NavLink
        to="/partners"
        className={({ isActive }) =>
          isActive ? `${css["nav-link"]} ${css.active}` : css["nav-link"]
        }
        onClick={onClick}
      >
        partners
      </NavLink>
      <NavLink
        to="/contract"
        className={({ isActive }) =>
          isActive ? `${css["nav-link"]} ${css.active}` : css["nav-link"]
        }
        onClick={onClick}
      >
        contract
      </NavLink>
    </nav>
  );
};
export default MainNavigation;
