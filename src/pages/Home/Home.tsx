import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Container from "../../components/Shared/Container";
import Hero from "../../components/Hero";
import TripCategory from "../../components/Trips/TripsNavigation/Trips.type";
import TripsNavigation from "../../components/Trips/TripsNavigation";
import LookingTrips from "../../components/Trips/LookingTrips";
import TripsGrid from "../../components/Trips/TripsGrid";
import AboutUs from "../../components/AboutUs";
import About from "../../components/AboutUs/AboutInfoItem/AboutInfoItem.type";
import StayTuned from "../../components/StayTuned";
import ReviewsSlider from "../../components/ReviewsSlider";
import Review from "../../components/ReviewsSlider/ReviewCard/Review.type";

const categoryList: TripCategory[] = [
  { id: 1, title: "Закордонні подорожі", imgUrl: "icon-47" },
  { id: 2, title: "Подорожі цього тижня", imgUrl: "icon-46" },
  { id: 3, title: "Одноденні", imgUrl: "icon-44" },
  { id: 4, title: "Авіаподорожі", imgUrl: "icon-39" },
  { id: 5, title: "Виїз з Польщі", imgUrl: "icon-33" },
  { id: 6, title: "Подорожі Україною", imgUrl: "icon-21" },
  { id: 7, title: "Гарантований виїзд", imgUrl: "icon-28" },
  { id: 8, title: "Альтернатива морю в Україні", imgUrl: "icon-82" },
  { id: 9, title: "Море", imgUrl: "icon-45" },
  { id: 10, title: "Всі подорожі", imgUrl: "icon-78" },
];

const aboutList: About[] = [
  {
    id: "1",
    title: "Учасників",
    iconName: "icon-users",
    infoList: [
      { caption: "Всього", amount: 125436 },
      { caption: "Зараз у подорожах", amount: 821 },
      { caption: "Запланували\n подорожі з нами", amount: 3729 },
    ],
  },
  {
    id: "2",
    title: "Подорожуємо",
    iconName: "icon-kubok",
    infoList: [{ caption: "Років", amount: 13 }],
  },
  {
    id: "3",
    title: "Подорожей",
    iconName: "icon-box",
    infoList: [
      { caption: "Всього", amount: 3625 },
      { caption: "Зараз відбувається", amount: 23 },
      { caption: "Заплановано", amount: 307 },
    ],
  },
  {
    id: "4",
    title: "Відгуків",
    iconName: "icon-sociale",
    infoList: [{ caption: "Реальних відгуків \nпро нас", amount: 25007 }],
  },
];

const reviewList: Review[] = [
  {
    id: "1",
    firstName: "Oleh",
    secondName: "Bakalov",
    avatarURL:
      "https://res.cloudinary.com/dcw1yxr6s/image/upload/v1722171982/2101a-140_dxa7cr.jpg",
    eventGroupName: "Драгобрат та Гуцульщина",
    eventDate: "Шафранові вихідні на Драгобраті!) ( 05 травня 2023 )",
    review:
      "Багато вражень, дуже уважні організатори, нам сподобалося, що програму коригували в процесі. Альона, Крістіна і Майкл зробили вікенд🤗❤️ Хоч і постійно падав дощ, ми ні про що не шкодуємо. В отелі  чисто, смачно і тепло.",
    rating: [
      { title: "Транспорт", rating: "good" },
      { title: "Проживання", rating: "neutral" },
      { title: "Організатор", rating: "good" },
      { title: "Програма подорожі ", rating: "good" },
      { title: "Загальні враження", rating: "bad" },
    ],
    reviewDate: "08 травня 2023 12:11",
  },
  {
    id: "2",
    firstName: "Oleh",
    secondName: "Bakalov",
    avatarURL:
      "https://res.cloudinary.com/dcw1yxr6s/image/upload/v1722171982/2101a-140_dxa7cr.jpg",
    eventGroupName: "Драгобрат та Гуцульщина",
    eventDate: "Шафранові вихідні на Драгобраті!) ( 05 травня 2023 )",
    review:
      "Багато вражень, дуже уважні організатори, нам сподобалося, що програму коригували в процесі. Альона, Крістіна і Майкл зробили вікенд🤗❤️ Хоч і постійно падав дощ, ми ні про що не шкодуємо. В отелі  чисто, смачно і тепло.",
    rating: [
      { title: "Транспорт", rating: "good" },
      { title: "Проживання", rating: "neutral" },
      { title: "Організатор", rating: "good" },
      { title: "Програма подорожі ", rating: "good" },
      { title: "Загальні враження", rating: "bad" },
    ],
    reviewDate: "08 травня 2023 12:11",
  },
  {
    id: "3",
    firstName: "Oleh",
    secondName: "Bakalov",
    avatarURL:
      "https://res.cloudinary.com/dcw1yxr6s/image/upload/v1722171982/2101a-140_dxa7cr.jpg",
    eventGroupName: "Драгобрат та Гуцульщина",
    eventDate: "Шафранові вихідні на Драгобраті!) ( 05 травня 2023 )",
    review:
      "Багато вражень, дуже уважні організатори, нам сподобалося, що програму коригували в процесі. Альона, Крістіна і Майкл зробили вікенд🤗❤️ Хоч і постійно падав дощ, ми ні про що не шкодуємо. В отелі  чисто, смачно і тепло.",
    rating: [
      { title: "Транспорт", rating: "good" },
      { title: "Проживання", rating: "neutral" },
      { title: "Організатор", rating: "good" },
      { title: "Програма подорожі ", rating: "good" },
      { title: "Загальні враження", rating: "bad" },
    ],
    reviewDate: "08 травня 2023 12:11",
  },
];
// import Hero from "../../components/Hero";
const Home: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <Container>
        <TripsNavigation categoryList={categoryList} />
        <LookingTrips />
        <TripsGrid />
        {/* <div style={{ paddingTop: "120px" }}> */}
        {/* <PageContainer> */}
        <h1>Home Page</h1>
        {/* </PageContainer> */}
        {/* </div> */}

        <div style={{ height: "1700px", backgroundColor: "tomato" }}></div>
      </Container>
      <AboutUs list={aboutList} />
      <StayTuned />
      <ReviewsSlider reviewList={reviewList} />
    </HelmetProvider>
  );
};

export default Home;
