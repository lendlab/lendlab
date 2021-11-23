import Dashboard from "@components/Dashboard";
import React from "react";

import UsersTable from "./Table";

const Users = () => {
  return (
    <Dashboard
      link="/dashboard/usuarios/nuevo"
      buttonText="Nuevo usuario"
      title="Usuarios"
    >
      <UsersTable />
    </Dashboard>
  );
};

export default Users;
