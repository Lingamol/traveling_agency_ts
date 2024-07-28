import React from "react";
import css from "./LogoMain.module.scss";
import { ReactComponent as LogoIcon } from "../../img/logo/tcb-logo-grey.f01b1c1e.svg";

const LogoMain: React.FC = () => {
  return <LogoIcon className={css.logo} />;
};

export default LogoMain;
