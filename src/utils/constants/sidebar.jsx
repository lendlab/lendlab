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
        path: "/dashboard/resumen",
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
        path: "/dashboard/prestamos",
      },
      {
        name: "Reservas",
        icon() {
          return <Reserve />;
        },
        path: "/dashboard/reservas",
      },
      {
        name: "Materiales",
        icon() {
          return <BriefCase />;
        },
        path: "/dashboard/materiales",
      },
      {
        name: "Usuarios",
        icon() {
          return <ProfileUser2 />;
        },
        path: "/dashboard/usuarios",
      },
      {
        name: "Salas",
        icon() {
          return <Home />;
        },
        path: "/dashboard/salas",
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
        path: "/dashboard/chat",
      },
      {
        name: "Configuración",
        icon() {
          return <Settings />;
        },
        path: "/dashboard/configuracion",
      },
    ],
  },
];
