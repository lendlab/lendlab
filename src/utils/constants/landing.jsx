import React from "react";
import {
  Arrow2,
  BriefCase,
  Bucket,
  Card,
  Cup,
  Edit,
  ExportIcon,
  FavoriteChart,
  FlashCircle,
  Frame,
  Home,
  LoginIcon,
  LogoutIcon,
  People,
  Prestamo,
  ProfileUser2,
  Reserve,
  SMS,
  Trash,
} from "@icons";

export const NAV_DATA = {
  options: [
    {
      name: "Sobre nosotros",
      link: "#aboutUs",
      icon() {
        return <People />;
      },
    },
    {
      name: "Caracteristicas",
      link: "#features",
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
};

export const HERO_DATA = {
  you: "Tú",
  gradient: "Institución",
  nowOnline: "ahora en forma online",
  weLet:
    "Te permitimos realizar los prestamos de tu institución. ¿Eres laboratorista?, olvidate del lapiz y papel, gestiona ahora! ",
  bold: "Gratuitamente",
  button: {
    text: "Empezar ahora",
    icon() {
      return <LoginIcon />;
    },
  },
};

export const BENEFITS_DATA = {
  title: "Todo lo que esperarías de un sistema de administración",
  benefits: [
    {
      icon() {
        return <BriefCase />;
      },
      name: "Materiales",
      description: "Todos los materiales de tu institución, con su respectiva información",
    },
    {
      icon() {
        return <SMS />;
      },
      name: "Soporte",
      description: "Comunicate y ayuda a los usuarios con sus problemas",
    },
    {
      icon() {
        return <Home />;
      },
      name: "Salas",
      description: "Lista de todas las salas, conoce quien las ocupa",
    },
    {
      icon() {
        return <ProfileUser2 />;
      },
      name: "Usuarios",
      description: "Obtén un listado de todos los usuarios, junto con sus analiticas",
    },
    {
      icon() {
        return <Prestamo />;
      },
      name: "Prestamos",
      description: "Gestiona los prestamos activos, autorizados por ti, etc",
    },
    {
      icon() {
        return <Reserve />;
      },
      name: "Reservas",
      description: "Acepta, rechaza la reserva de materiales",
    },
  ],
};

export const FEATURES_DATA = {
  features: [
    {
      direction: "row",
      illustration: "/images/prestamoIllustration.svg",
      title: "Administración de prestamos",
      description: "Con Lendlab, puedes administrar todos tus prestamos de forma inmediata",
      button: {
        text: "Probar Ahora",
        icon() {
          return <Arrow2 fill="#fff" />;
        },
      },
    },
    {
      direction: "row-reverse",
      illustration: "/images/reserveIllustration.svg",
      title: "Administración de reservas",
      description:
        "Con Lendlab, puedes administrar todas las reservas de materiales, aceptarlas, tanto como rechazarlas",
      button: {
        text: "Probar Ahora",
        icon() {
          return <Arrow2 fill="#fff" />;
        },
      },
    },
  ],
  actions: [
    {
      name: "Eliminar",
      icon() {
        return <Trash />;
      },
    },
    {
      name: "Crear",
      icon() {
        return <ExportIcon />;
      },
    },
    {
      name: "Actualizar",
      icon() {
        return <Edit />;
      },
    },
    {
      name: "Consultar",
      icon() {
        return <Frame />;
      },
    },
  ],
};

export const ABOUT_US_DATA = {
  title: "Construyendo el futuro de las instituciones",
  subtitle:
    "Nuestra misión es brindar a todos los centros educativos del Uruguay una organización única en cuanto a la gestión, administración y realización de préstamos de materiales, proveyéndoles de una  magnífica y grata experiencia a través de nuestra aplicación web.",
  aspects: [
    {
      icon() {
        return <Bucket />;
      },
      name: "Modernidad",
      description:
        "Para nosotros, contar con una interfaz moderna, amigable y atractiva es algo fundamental para atraer a los usuarios de todas las edades, que los mantenga. Para ello, nuestro equipo de diseño ha hecho un trabajo enorme.",
    },
    {
      icon() {
        return <FavoriteChart />;
      },
      name: "Calidad",
      description:
        "El brindar un producto de calidad, sumamente cuidado y con la mayor de funcionalidades posibles, logrando asi una experiencia increíble, ha sido de gran prioridad dentro de nuestro esfuerzo.",
    },
    {
      icon() {
        return <Cup />;
      },
      name: "Objetivos",
      description:
        "Ser una empresa reconocida en el  Uruguay por su excelente funcionamiento, diseño, experiencia de usuario y accesibilidad, liderando el área de gestión y administración. Cubrir cada centro de enseñanza uruguayo existente,  para luego trascender a lo internacional.",
    },
  ],
};

export const OUR_TEAM_DATA = {
  title: "Nuestro equipo",

  team: [
    {
      img: "/images/Cianzio.jpg",
      name: "Marcos Cianzio",
      badge: "Jefe",
    },
    {
      img: "/images/Prestes.jpg",
      name: "Iván Prestes",
      badge: "Documentador",
    },
    {
      img: "/images/Fiorelli.jpg",
      name: "Francisco Fiorelli",
      badge: "Desarrollador",
    },
    {
      img: "/images/Heredia.jpg",
      name: "Nicolás Heredia",
      badge: "Desarrollador",
    },
  ],
};
