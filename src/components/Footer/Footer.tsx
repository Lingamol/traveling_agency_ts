import React from "react";
import css from "./Footer.module.scss";
import Schedule from "./Schedule";
import ContactInfo from "./ContactInfo";
import LocationInfo from "./LocationInfo";
import useMatchMedia from "../../hooks/useMatchMedia";
import SocialInfo from "./SocialInfo";
import socialList from "../../MockData/socialList";
import CopyRights from "./CopyRights";

const Footer: React.FC = () => {
  const { isDesktop } = useMatchMedia();

  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css["contact-info"]}>
          <Schedule isDesktop={isDesktop} />
          <ContactInfo isDesktop={isDesktop} />
          <LocationInfo isDesktop={isDesktop} />
          <SocialInfo isDesktop={isDesktop} socialList={socialList} />
        </div>
      </div>
      <CopyRights />
    </footer>
  );
};
export default Footer;
