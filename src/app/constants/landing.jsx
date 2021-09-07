import React from "react";

import FlashCircle from "~/ui/icons/FlashCircle";
import People from "~/ui/icons/People";
import LoginIcon from "~/ui/icons/LoginIcon";

export const landingData = {
  nav: {
    options: [
      {
        name: "Sobre nosotros",
        icon() {
          return <People />;
        },
      },
      {
        name: "Caracteristicas",
        icon() {
          return <FlashCircle />;
        },
      },
    ],
    button: {
      text: "Iniciar sesíon",
      icon() {
        return <LoginIcon />;
      },
    },
  },
  main: {
    flag: "/images/uruguayanFlag.svg",
    institutionCount: "345",
    institutionChoice: "INSTITUCIONES YA NOS ELIGEN",
    titleOne: "Tu institución",
    titleTwo: "en una pantalla",
    features: "MATERIALES, PRÉSTAMOS, RESERVAS, SALAS Y MÁS",
    information: "Un sistema hecho a la medida de tu institución",
    joinNow: "Únete ya",
    price: "Gratuitamente",
    button: {
      text: "Empezar ahora",
      icon() {
        return <LoginIcon />;
      },
    },
  },
};
