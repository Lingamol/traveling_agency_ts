import React from "react";

import css from "./CopyRights.module.scss";

const CopyRights: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <p>© 2011 - 2024 | Всі права захищено.</p>
    </div>
  );
};

export default CopyRights;
