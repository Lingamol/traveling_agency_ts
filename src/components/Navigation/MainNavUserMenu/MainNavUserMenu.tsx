import React from "react";
import css from "./MainNavUserMenu.module.scss";

import Container from "../../Shared/Container";

type Props = { isSelected: boolean; onMouseLeave: () => void };

const MainNavUserMenu: React.FC<Props> = ({ isSelected, onMouseLeave }) => {
  return (
    <div
      className={`${css["user-side-bar"]} ${isSelected && css.selected}`}
      onMouseLeave={onMouseLeave}
    >
      <Container>
        {/* <div className={css["container-menu"]}> */}
        <div className={css.flex}>
          <div>User component</div>
          {/* <SocialMenu name={t("subscribe", { ns: "common" })} /> */}
        </div>
        {/* </div> */}
      </Container>
    </div>
  );
};
export default MainNavUserMenu;
