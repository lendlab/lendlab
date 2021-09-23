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
        path: "/app/resumen",
      },
    ],
  },
  {
    sectionName: "Administracion",
    linkItems: [
      {
        name: "Préstamos",
        icon() {
          return <Prestamo />;
        },
        path: "/app/prestamos",
      },
      {
        name: "Reservas",
        icon() {
          return <Reserve />;
        },
        path: "/app/reservas",
      },
      {
        name: "Materiales",
        icon() {
          return <BriefCase />;
        },
        path: "/app/materiales",
      },
      {
        name: "Usuarios",
        icon() {
          return <ProfileUser2 />;
        },
        path: "/app/usuarios",
      },
      {
        name: "Salas",
        icon() {
          return <Home />;
        },
        path: "/app/salas",
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
        path: "/app/chat",
      },
      {
        name: "Configuración",
        icon() {
          return <Settings />;
        },
        path: "/app/configuracion",
      },
    ],
  },
];
