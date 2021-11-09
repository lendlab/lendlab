import { Table } from "@components/Table";
import TableSkeleton from "@components/Table/TableSkeleton";
import { useMe } from "@graphql/auth/custom-hook";
import { SUBSCRIBE_TO_USERS } from "@graphql/users/graphql-subscriptions";
import React from "react";
import { useLaboratoristsByInstitution } from "@graphql/users/custom-hooks";

import { COLUMNS } from "./columns";

const LaboratoristsTable = () => {
  const { data: dataMe } = useMe();

  const { loading, error, data, subscribeToMore } = useLaboratoristsByInstitution(
    dataMe?.me.course.institution.id_institution
  );

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
      data={data.getLaboratoristsByInstitution}
      id="Laboratoristas"
      subscribeToNew={() => {
        subscribeToMore({
          document: SUBSCRIBE_TO_USERS,

          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;

            const newSuscription = subscriptionData.data.newUserSubscription;

            return Object.assign({}, prev, {
                getLaboratoristsByInstitution: [newSuscription, ...prev.getLaboratoristsByInstitution],
            });
          },
        });
      }}
    />
  );
};

export default LaboratoristsTable;
