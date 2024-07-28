import React from "react";
import css from "./MainNavSideBar.module.scss";

import Container from "../../Shared/Container";
import MainNavigation from "../MainNavigation";
import SocialMenu from "../../Social/SocialMenu";

type Props = { isSelected: boolean; onMouseLeave: () => void };

const MainNavSideBar: React.FC<Props> = ({ isSelected, onMouseLeave }) => {
  return (
    <div
      className={`${css["nav-side-bar"]} ${isSelected && css.selected}`}
      onMouseLeave={onMouseLeave}
    >
      <Container>
        {/* <div className={css["container-menu"]}> */}
        <div className={css.flex}>
          <MainNavigation onClick={onMouseLeave} />
          <SocialMenu />
        </div>
        {/* </div> */}
      </Container>
    </div>
  );
};
export default MainNavSideBar;
