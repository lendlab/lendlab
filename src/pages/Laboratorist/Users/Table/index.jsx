import { Table } from "@components/Table";
import TableSkeleton from "@components/Table/TableSkeleton";
import { useUsers } from "@graphql/users/custom-hooks";
import React from "react";

import { COLUMNS } from "./columns";

const UsersTable = () => {
  const { loading, error, data } = useUsers();

  if (loading || !data) {
    return (
      <TableSkeleton
        theads={[
          "Cedula",
          "Nombre",
          "Direccion",
          "Avatar",
          "Telefono",
          "Tipo de Usuario",
          "Fecha de Nacimiento",
        ]}
      />
    );
  }

  if (error) {
    return error.message;
  }

  return <Table columns={COLUMNS} data={data.getUsers} />;
};

export default UsersTable;
