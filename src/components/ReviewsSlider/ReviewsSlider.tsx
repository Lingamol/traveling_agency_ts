import React from "react";

import css from "./ReviewsSlider.module.scss";
import Review from "./ReviewCard/Review.type";
import Swiper from "./Swiper";

type Props = { reviewList: Review[] };

const ReviewsSlider: React.FC<Props> = ({ reviewList }) => {
  return (
    <section className={css.review}>
      <div className={css.container}>
        <h2 className={css.header}>Відгуки наших друзів</h2>
        <Swiper reviewList={reviewList} />
      </div>
    </section>
  );
};
export default ReviewsSlider;
