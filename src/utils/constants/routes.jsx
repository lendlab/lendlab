import {
  FiAlertTriangle,
  FiArchive,
  FiClock,
  FiGrid,
  FiTool,
  FiUsers,
  FiPenTool,
} from "react-icons/fi";

export const DASHBOARD_ROUTES = [
/*   {
    title: "Resumen",
    icon: FiGrid,
    path: "/dashboard/resumen",
  }, */
  {
    title: "Préstamos",
    icon: FiArchive,
    path: "/dashboard/prestamos",
  },
  {
    title: "Reservas",
    icon: FiClock,
    path: "/dashboard/reservas",
  },
  /*  {
    title: "Incidentes",
    icon: FiAlertTriangle,
    path: "/dashboard/incidentes",
  }, */
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
    title: "Laboratoristas",
    icon: FiArchive,
    path: "/director/laboratoristas",
  },
  {
    title: "Cursos",
    icon: FiPenTool,
    path: "/director/cursos",
  },
];

export const ADMIN_ROUTES = [
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
  {
    title: "Mis reservas",
    icon: FiGrid,
    path: "/app/mis-reservas",
  },
  {
    title: "Mis prestamos",
    icon: FiGrid,
    path: "/app/mis-prestamos",
  },
];
