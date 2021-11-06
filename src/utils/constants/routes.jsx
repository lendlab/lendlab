import { FiAlertTriangle, FiArchive, FiClock, FiGrid, FiTool, FiUsers } from "react-icons/fi";

export const DASHBOARD_ROUTES = [
  {
    title: "Resumen",
    icon: FiGrid,
    path: "/dashboard/resumen",
  },
  {
    title: "Prestamos",
    icon: FiArchive,
    path: "/dashboard/prestamos",
  },
  {
    title: "Reservas",
    icon: FiClock,
    path: "/dashboard/reservas",
  },
  {
    title: "Incidentes",
    icon: FiAlertTriangle,
    path: "/dashboard/incidentes",
  },
  {
    title: "Materiales",
    icon: FiTool,
    path: "/dashboard/materiales",
  },
  {
    title: "Usuarios",
    icon: FiUsers,
    path: "/dashboard/usuarios",
  },
];

export const DIRECTOR_ROUTES = [
  {
    title: "Resumen",
    icon: FiGrid,
    path: "/director/resumen",
  },
  {
    title: "Laboratoristas",
    icon: FiArchive,
    path: "/director/laboratoristas",
  },
];

export const ADMIN_ROUTES = [
  {
    title: "Resumen",
    icon: FiGrid,
    path: "/admin/resumen",
  },
  {
    title: "Instituciones",
    icon: FiArchive,
    path: "/admin/instituciones",
  },
];

export const STUDENT_ROUTES = [
  {
    title: "Inicio",
    icon: FiGrid,
    path: "/app/inicio",
  },
];
