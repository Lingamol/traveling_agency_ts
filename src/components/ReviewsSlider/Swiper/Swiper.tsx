import React from "react";

import css from "./Swiper.module.scss";
import Review from "../ReviewCard/Review.type";
import ReviewCard from "../ReviewCard";
import SwiperButton from "./SwiperButton";

type Props = { reviewList: Review[] };
const Swiper: React.FC<Props> = ({ reviewList }) => {
  return (
    <div className={css.swiper}>
      <ul className={css.list}>
        {reviewList.map((item) => (
          <li key={item.id}>
            <ReviewCard item={item} />
          </li>
        ))}
      </ul>
      <SwiperButton type="left" />
      <SwiperButton type="right" />
    </div>
  );
};
export default Swiper;
