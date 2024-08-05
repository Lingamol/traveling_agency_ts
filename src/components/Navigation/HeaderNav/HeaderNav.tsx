import React from "react";
import css from "./HeaderNav.module.scss";
import ButtonNav from "../ButtonNav";
import { SlUser } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import useMatchMedia from "../../../hooks/useMatchMedia";
type Props = {
  activeItem: string;
  setActiveItem: (name: string) => void;
  isScrolled: boolean;
};

const HeaderNav: React.FC<Props> = ({
  setActiveItem,
  activeItem,
  isScrolled,
}) => {
  const { isMobile } = useMatchMedia();
  // console.log("isMobile", isMobile);
  return (
    <ul className={css["nav-list"]}>
      <li className={css["nav-item"]}>
        <ButtonNav
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="menu"
          isScrolled={isScrolled}
        >
          {isMobile ? (
            <GiHamburgerMenu className={css["icon-hamburger"]} />
          ) : (
            "Menu"
          )}
        </ButtonNav>
      </li>
      <li className={css["nav-item"]}>
        <ButtonNav
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isScrolled={isScrolled}
          name="search"
        >
          {/* <BsSearch className={css["icon-search"]} /> */}
          {isMobile ? <BsSearch className={css["icon-search"]} /> : "Search"}
        </ButtonNav>
      </li>
      {!isMobile && (
        <li className={css["nav-item"]}>
          <ButtonNav
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            isScrolled={isScrolled}
            name="user"
          >
            <SlUser className={css["icon-user"]} />
          </ButtonNav>
        </li>
      )}
    </ul>
  );
};
export default HeaderNav;
