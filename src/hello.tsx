import React from "react";
import Logo from "./content/bird.png";
import "./styles.scss";

export const HelloComponent: React.FC = () => {
  return (
    <>
      {" "}
      <h1>Hello World!</h1>
      <img src={Logo} />
    </>
  );
};
