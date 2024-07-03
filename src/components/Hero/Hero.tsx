import React from "react";
import css from "./Hero.module.css";

// import banner_w640 from "../../img/Hero/donate-on-military-banner.c1b885aa w=640.jpg";
// import banner_w750 from "../../img/Hero/donate-on-military-banner.c1b885aa w=750.jpg";
// import banner_w828 from "../../img/Hero/donate-on-military-banner.c1b885aa w=828.jpg";
// import banner_w1080 from "../../img/Hero/donate-on-military-banner.c1b885aa w=1080.jpg";
// import banner_w1200 from "../../img/Hero/donate-on-military-banner.c1b885aa w=1200.jpg";
// import banner_w1920 from "../../img/Hero/donate-on-military-banner.c1b885aa w=1920.jpg";
// import banner_w2048 from "../../img/Hero/donate-on-military-banner.c1b885aa w=2048.jpg";
// import banner_w3840 from "../../img/Hero/donate-on-military-banner.c1b885aa w=3840.jpg";

const Hero: React.FC = () => {
  return (
    <div className={css.Hero}></div>
    // <div className={css.HeroWrapper}>
    //   {/* <img
    //     src={banner_w640}
    //     alt="Donate on Military Banner"
    //     loading="lazy"
    //     className={css.BannerImage}
    //   /> */}
    //   <picture>
    //     <source
    //       srcSet={`${banner_w3840} 3840w, ${banner_w2048} 2048w, ${banner_w1920} 1920w, ${banner_w1200} 1200w`}
    //       media="(min-width: 1280px)"
    //     />
    //     <source
    //       srcSet={`${banner_w1080} 1080w, ${banner_w828} 828w`}
    //       media="(min-width: 768px)"
    //     />
    //     <source
    //       srcSet={`${banner_w750} 750w, ${banner_w640} 640w`}
    //       media="(max-width: 767px)"
    //     />
    //     <img
    //       src={banner_w640}
    //       alt="Donate on Military Banner"
    //       loading="lazy"
    //       className={css.BannerImage}
    //     />
    //   </picture>
    // </div>
  );
};

export default Hero;
