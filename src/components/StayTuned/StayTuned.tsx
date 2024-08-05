import React from "react";

import css from "./StayTuned.module.scss";
import SubscribeForm from "./SubscribeForm";
import SubscribeSocial from "./SubscribeSocial";
import socialList from "../../MockData/socialList";

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
