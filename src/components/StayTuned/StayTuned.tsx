import React from "react";

import css from "./StayTuned.module.scss";
import SubscribeForm from "./SubscribeForm";
import SubscribeSocial from "./SubscribeSocial";
import Social from "../Social/Social.type";

const socialList: Social[] = [
  { title: "Instagram", iconName: "icon-Instagram" },
  { title: "Twitter", iconName: "icon-Twitter" },
  { title: "Facebook", iconName: "icon-Facebook" },
  { title: "LinkedIn", iconName: "icon-LinkedIn" },
  { title: "YouTube", iconName: "icon-YouTube" },
  { title: "Viber", iconName: "icon-Viber" },
  { title: "Telegram", iconName: "icon-Telegram" },
  { title: "WhatsApp", iconName: "icon-WhatsApp" },
  { title: "Tiktok", iconName: "icon-TikTok" },
];
const StayTuned: React.FC = () => {
  const onSubscribe = (email: string) => console.log(`Subscribe ${email}`);

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.header}>Будь в курсі всіх подій</h2>
        <div className={css.text}>
          Підписуйтесь на наші новини - отримуй корисну інформацію та знижки
        </div>
        <SubscribeForm onSubscribe={onSubscribe} />
        <div className={css.social}>
          <SubscribeSocial list={socialList} />
        </div>
      </div>
    </section>
  );
};

export default StayTuned;
