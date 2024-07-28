import React from "react";

import css from "./AboutUs.module.scss";
import Container from "../Shared/Container";
import AboutInfoList from "./AboutInfoList";
import About from "./AboutInfoItem/AboutInfoItem.type";

type Props = { list: About[] };

const AboutUs: React.FC<Props> = ({ list }) => {
  return (
    <section className={css.about}>
      <Container>
        <h1 className={css.header}>Про Нас</h1>
        <div className={css.description}>
          <p className={css.text}>
            «Подорожі – це краще, що сталося з нами в житті» - кредо кожного,
            хто пов'язав свою долю із нашим Клубом.
          </p>
          <p className={css.text}>
            Ще близько 10 років тому ми були веселими безтурботними студентами,
            спраглими до пригод та мандрів. Йшли роки і Наш клуб розрісся до
            великої спільноти однодумців. І як і багато років тому, навколо нас
            об'єднуються люди, чиєю основною цінністю є дружня атмосфера та жага
            до мандрів. Ми жили, живемо та будемо жити враженнями, які можна
            отримати лише вирушаючи у захоплюючі нові та вже улюблені відвідані
            мандрівки із старими та новими Друзями, яких сьогодні вже більше 60
            000.
          </p>
          <p className={css.text}>Ми - клуб друзів для друзів! Ти з нами?</p>
        </div>
        <AboutInfoList list={list} />
      </Container>
    </section>
  );
};

export default AboutUs;
