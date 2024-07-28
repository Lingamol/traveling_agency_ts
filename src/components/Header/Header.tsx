// import React from "react";
// import css from "./Header.module.css";
// type Props = { children: React.ReactNode };

// const Header: React.FC<Props> = ({ children }: Props) => {
//   return <div className={css.Header}>{children}</div>;
// };
// export default Header;
import React from "react";
// import Logo from "../Logo";
// import HeaderNav from "components/HeaderNav/HeaderNav";

import css from "./Header.module.scss";
// import ButtonTheme from "components/ButtonTheme/ButtonTheme";
// import LanguageList from "components/LanguageList/LanguageList";
import { useState } from "react";

// import useMatchMedia from "../../hooks/useMatchMedia";
// import useMatchMedia from "../../hooks/useMatchMedia";
// import MainNavSideBar from "components/MainNav/MainNavSideBar/MainNavSideBar";
// import MainNavSearch from "components/MainNav/MainNavSearch/MainNavSearch ";
// import MainNavUserMenu from "components/MainNav/MainNavUserMenu/MainNavUserMenu";
import useScrollEffect from "../../hooks/useScrollEffect";
import HeaderNav from "../Navigation/HeaderNav";
import MainNavSideBar from "../Navigation/MainNavSideBar";
import MainNavSearch from "../Navigation/MainNavSearch";
import MainNavUserMenu from "../Navigation/MainNavUserMenu";
import LogoMain from "../LogoMain";

const Header: React.FC = () => {
  // const { isMobile } = useMatchMedia();
  const [scrollTop, setScrollTop] = useState<number>(0);

  useScrollEffect(setScrollTop);
  const [activeItem, setActiveItem] = useState("");

  const onMouseLeave = () => {
    setActiveItem("");
  };
  const scrolled = scrollTop > 0 || Boolean(activeItem);
  return (
    <div className={css["header-fixed"]}>
      <div className={css["header-wrapper"]}>
        <div className={`${css.header} ${scrolled ? css.scroll : ""}`}>
          {/* <div className={css["header-flex"]}> */}
          {/* <Logo /> */}
          <div className={css["logo-wraper"]}>
            <LogoMain />
          </div>
          <div className={css["nav-container"]}>
            <HeaderNav
              setActiveItem={setActiveItem}
              activeItem={activeItem}
              isScrolled={scrolled}
            />
          </div>
          {/* </div> */}
        </div>
        <MainNavSideBar
          isSelected={activeItem === "menu"}
          onMouseLeave={onMouseLeave}
        />
        <MainNavSearch
          isSelected={activeItem === "search"}
          onMouseLeave={onMouseLeave}
        />
        <MainNavUserMenu
          isSelected={activeItem === "user"}
          onMouseLeave={onMouseLeave}
        />
      </div>
    </div>
    // <div className={css["header-fixed"]}>
    //   <div className={css["header-wrapper"]}>
    //     <div className={Number(scrollTop) ? "header scroll " : "header"}>
    //       <Logo />
    //       {/* <div className={css["nav-container"]}> */}
    //       {/* {!isMobile && <LanguageList />}
    //         {!isMobile && <ButtonTheme />}
    //         <HeaderNav {...propsNav} /> */}
    //       {/* </div> */}
    //     </div>
    //     {/* <MainNavSideBar
    //       isSelected={menu.toString()}
    //       onClick={onRedirect}
    //       onMouseLeave={onMenuLeave}
    //     /> */}
    //     {/*
    //     <MainNavSearch
    //       isSelected={search.toString()}
    //       onClick={onRedirect}
    //       onMouseLeave={onSearchLeave}
    //     /> */}

    //     {/* <MainNavUserMenu
    //       isSelected={user.toString()}
    //       onClick={onRedirect}
    //       onMouseLeave={onUserLeave}
    //     /> */}
    //   </div>
    // </div>
  );
};

export default Header;
