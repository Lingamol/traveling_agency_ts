import React from "react";

import css from "./MainNavSearch.module.scss";
import Container from "../../Shared/Container";

type Props = { isSelected: boolean; onMouseLeave: () => void };

const MainNavSearch: React.FC<Props> = ({ isSelected, onMouseLeave }) => {
  return (
    <div
      className={`${css["search-side-bar"]} ${isSelected && css.selected}`}
      onMouseLeave={onMouseLeave}
    >
      <Container>
        {/* <div className={css["container-menu"]}> */}
        <div className={css.flex}>
          <div>Searh bar component</div>
        </div>
        {/* </div> */}
      </Container>
    </div>
  );
};
export default MainNavSearch;
