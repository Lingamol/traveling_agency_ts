import About from "../components/AboutUs/AboutInfoItem/AboutInfoItem.type";

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

export default aboutList;