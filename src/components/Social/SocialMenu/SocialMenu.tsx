import React from "react";
import css from "./SocialMenu.module.scss";
import useMatchMedia from "../../../hooks/useMatchMedia";
import { ReactComponent as Facebook } from "../../../img/social/facebook.svg";
import { ReactComponent as Instagram } from "../../../img/social/instagram.svg";
import { ReactComponent as Twitter } from "../../../img/social/twitter.svg";
import { ReactComponent as Linkedin } from "../../../img/social/linkedin.svg";


type Props = { title?: string };
const SocialMenu: React.FC<Props> = ({ title }) => {
  const { isMobile } = useMatchMedia();
  return (
    <>
      <div className={css["social-tab"]}>
        {title && <h3 className={css["social-title"]}>{title}</h3>}
        <ul className={css["socia-list"]}>
          <li className={css["social-item"]}>
            <a href="/" className={css["social-link"]}>
              <Instagram />
            </a>
            {!isMobile && <span className={css["social-name"]}>Instagram</span>}
          </li>
          <li className={css["social-item"]}>
            <a href="/" className={css["social-link"]}>
              <Twitter />
            </a>
            {!isMobile && <span className={css["social-name"]}>Twitter</span>}
          </li>
          <li className={css["social-item"]}>
            <a href="/" className={css["social-link"]}>
              <Facebook className={css.facebook} />
            </a>
            {!isMobile && <span className={css["social-name"]}>Facebook</span>}
          </li>
          <li className={css["social-item"]}>
            <a href="/" className={css["social-link"]}>
              <Linkedin />
            </a>
            {!isMobile && <span className={css["social-name"]}>Linkedin</span>}
          </li>
        </ul>
      </div>
    </>
  );
};
export default SocialMenu;
