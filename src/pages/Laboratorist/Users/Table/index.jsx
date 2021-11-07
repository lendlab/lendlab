import { Table } from "@components/Table";
import TableSkeleton from "@components/Table/TableSkeleton";
import { useUsers } from "@graphql/users/custom-hooks";
import React from "react";
import { SUBSCRIBE_TO_USERS } from "@graphql/users/graphql-subscriptions";

import { COLUMNS } from "./columns";

const UsersTable = () => {
  const { loading, error, data, subscribeToMore } = useUsers();

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

  return (
    <Table
      columns={COLUMNS}
      data={data.getUsers}
      id="Usuarios"
      subscribeToNew={() => {
        subscribeToMore({
          document: SUBSCRIBE_TO_USERS,

          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;

            const newSuscription = subscriptionData.data.newUserSubscription;

            return Object.assign({}, prev, {
              getUsers: [newSuscription, ...prev.getUsers],
            });
          },
        });
      }}
    />
  );
};

export default UsersTable;
