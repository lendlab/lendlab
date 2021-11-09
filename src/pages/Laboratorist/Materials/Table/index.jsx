import { Table } from "@components/Table";
import TableSkeleton from "@components/Table/TableSkeleton";
import { useMe } from "@graphql/auth/custom-hook";
import { useMaterialsByInstitution } from "@graphql/materials/custom-hooks";
import { SUBSCRIBE_TO_MATERIALS } from "@graphql/materials/graphql-subscriptions";
import React from "react";

import { COLUMNS } from "./columns";

const MaterialsTable = () => {
  const { data: dataMe } = useMe();

  const { loading, error, data, subscribeToMore } = useMaterialsByInstitution(
    dataMe?.me.course.institution.id_institution
  );

  if (loading || !data) {
    return (
      <TableSkeleton
        theads={[
          "ID",
          "Nombre",
          "Etiqueta",
          "Categoria",
          "Descripcion",
          "Cantidad",
          "Foto",
          "Estado",
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
      data={data.getMaterialsByInstitution}
      id="Materiales"
      subscribeToNew={() => {
        subscribeToMore({
          document: SUBSCRIBE_TO_MATERIALS,

          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;

            const newSuscription = subscriptionData.data.newMaterialSubscription;

            return Object.assign({}, prev, {
              getMaterialsByInstitution: [newSuscription, ...prev.getMaterialsByInstitution],
            });
          },
        });
      }}
    />
  );
};

export default MaterialsTable;
