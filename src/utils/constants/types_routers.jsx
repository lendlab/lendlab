import AdminRouter from "@routes/AdminRouter";
import DashboardRoutes from "@routes/DashboardRouter";
import DirectorRoutes from "@routes/DirectorRoutes";
import StudentRouter from "@routes/StudentRouter";
import UnloggedRouter from "@routes/UnloggedRouter";
import React from "react";

export const types_router = {
  Laboratorista: () => <DashboardRoutes />,
  Alumno: () => <StudentRouter />,
  Director: () => <DirectorRoutes />,
  Admin: () => <AdminRouter />,
  Unlogged: () => <UnloggedRouter />,
};
