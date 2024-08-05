// import React from "react";

// import css from "./ReviewsSlider.module.scss";
// import Review from "./ReviewCard/Review.type";
// import Swiper from "./Swiper";

// type Props = { reviewList: Review[] };

// const ReviewsSlider: React.FC<Props> = ({ reviewList }) => {
//   return (
//     <section className={css.review}>
//       <div className={css.container}>
//         <h2 className={css.header}>Відгуки наших друзів</h2>
//         <Swiper reviewList={reviewList} />
//       </div>
//     </section>
//   );
// };
// export default ReviewsSlider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";
import "swiper/css";
import "swiper/css/navigation";
import ReviewCard from "./ReviewCard/ReviewCard";
import css from "./ReviewsSlider.module.scss";
import Review from "./ReviewCard/Review.type";
import SwiperButton from "./Swiper/SwiperButton";

type Props = { reviewList: Review[] };

const ReviewsSlider: React.FC<Props> = ({ reviewList }) => {
  return (
    <section className={css.review}>
      <div className={css.container}>
        <h2 className={css.header}>Відгуки наших друзів</h2>
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {reviewList.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard item={review} />
            </SwiperSlide>
          ))}
        </Swiper>
        <SwiperButton type="left" />
        <SwiperButton type="right" />
      </div>
    </section>
  );
};

export default ReviewsSlider;
