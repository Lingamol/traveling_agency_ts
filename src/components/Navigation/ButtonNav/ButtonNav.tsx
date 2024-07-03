import React from "react";
import css from "./ButtonNav.module.css";

type Props = {
  children?: React.ReactNode;

  setActiveItem: (name: string) => void;
  name: string;
  activeItem: string;
  isScrolled?: boolean;
};

const ButtonNav: React.FC<Props> = ({
  children,
  setActiveItem,
  name,
  activeItem,
  isScrolled,
}) => {
  function handleOnChange(event: React.MouseEvent<HTMLButtonElement>) {
    const button = event.target as HTMLButtonElement;
    setActiveItem(button.name);
  }

  return (
    <button
      className={`${css["nav-button"]} ${
        activeItem === name ? css.current : ""
      } ${isScrolled ? css.scroll : ""} ${name === "user" ? css.user : ""}`}
      onMouseOver={handleOnChange}
      onClick={handleOnChange}
      name={name}
    >
      {children}
    </button>
  );
};

export default ButtonNav;
