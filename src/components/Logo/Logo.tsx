import React from "react";
import logo from "../../img/logo/logo.svg";
import { Link } from "react-router-dom";
import css from "./Logo.module.css";
const Logo: React.FC = () => {
  return (
    // <div>
    //   <span role="img" aria-label="computer icon">
    //     💻
    //   </span>
    //   GoMerch Store
    // </div>
    <Link to="/">
      <img src={logo} className={css["App-logo"]} alt="logo" />
    </Link>
  );
};
export default Logo;
