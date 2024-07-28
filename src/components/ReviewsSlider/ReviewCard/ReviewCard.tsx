import React from "react";

import css from "./ReviewCard.module.scss";
import Review from "./Review.type";
import Avatar from "../Avatar";

import RatingComponent from "../Rating/RatingComponent";

type Props = { item: Review };

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
};

const ReviewCard: React.FC<Props> = ({ item }) => {
  const {
    firstName,
    secondName,
    avatarURL,
    eventGroupName,
    eventDate,
    review,
    reviewDate,
    rating,
  } = item;

  const truncatedReview = truncateText(review, 120);
  return (
    <div className={css.card}>
      <div className={css.wrapper}>
        <div className={css["avatar-name"]}>
          <Avatar avatarData={{ firstName, secondName, avatarURL }} />
          <span className={css.name}>
            {firstName} {secondName}
          </span>
        </div>
        <a href="/" className={css.event} target="_blank">
          {eventGroupName}{" "}
          <span className={css["event-date"]}>{eventDate}</span>
        </a>
        <p className={css.review}>{truncatedReview}</p>
        <a href="/" className={css["read-more"]}>
          Читати далі...
        </a>
      </div>
      <div className={css["rating-wrapper"]}>
        {rating.length && <RatingComponent rating={rating} />}
        <span className={css["review-date"]}>{reviewDate}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
