import React from "react";
import {
  Settings,
  DashboardIcon,
  Messages,
  Home,
  Reserve,
  Prestamo,
  ProfileUser2,
  BriefCase,
} from "@icons";

export const SECTIONS = [
  {
    sectionName: "General",
    linkItems: [
      {
        name: "Resumen",
        icon() {
          return <DashboardIcon />;
        },
      },
    ],
  },
  {
    sectionName: "Administracion",
    linkItems: [
      {
        name: "Prestamos",
        icon() {
          return <Prestamo />;
        },
      },
      {
        name: "Reservas",
        icon() {
          return <Reserve />;
        },
      },
      {
        name: "Materiales",
        icon() {
          return <BriefCase />;
        },
      },
      {
        name: "Usuarios",
        icon() {
          return <ProfileUser2 />;
        },
      },
      {
        name: "Salas",
        icon() {
          return <Home />;
        },
      },
    ],
  },
  {
    sectionName: "SOPORTE",
    linkItems: [
      {
        name: "Chat",
        icon() {
          return <Messages />;
        },
      },
      {
        name: "Configuración",
        icon() {
          return <Settings />;
        },
      },
    ],
  },
];
