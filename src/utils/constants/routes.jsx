import { FiAlertTriangle, FiArchive, FiClock, FiGrid, FiTool, FiUsers } from "react-icons/fi";

export const ROUTES = [
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
