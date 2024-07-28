import React from "react";

import css from "./Avatar.module.scss";
import Review from "../ReviewCard/Review.type";
type Props = {
  avatarData: Pick<Review, "firstName" | "secondName" | "avatarURL">;
};
const Avatar: React.FC<Props> = ({ avatarData }) => {
  const { firstName, secondName, avatarURL } = avatarData;

  const getInitials = (firstName: string, secondName: string) => {
    const firstInitial = firstName ? firstName[0] : "";
    const secondInitial = secondName ? secondName[0] : "";
    return `${firstInitial}${secondInitial}`;
  };

  const initials = getInitials(firstName, secondName);

  return (
    <div className={css.avatar}>
      {!avatarURL && <span className={css["avatar-name"]}>{initials}</span>}
      {avatarURL && (
        <img src={avatarURL} alt="avatar" className={css["avatar-img"]} />
      )}
    </div>
  );
};
export default Avatar;
