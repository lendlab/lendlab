import { Table } from "@components/Table";
import React from "react";
import { useMaterials } from "@graphql/materials/custom-hooks";
import TableSkeleton from "@components/Table/TableSkeleton";
import { SUBSCRIBE_TO_MATERIALS } from "@graphql/materials/graphql-subscriptions";

import { COLUMNS } from "./columns";

const MaterialsTable = () => {
  const { loading, error, data, subscribeToMore } = useMaterials();

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
      data={data.getMaterials}
      id="Materiales"
      subscribeToNew={() => {
        subscribeToMore({
          document: SUBSCRIBE_TO_MATERIALS,

          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;

            const newSuscription = subscriptionData.data.newMaterialSubscription;

            return Object.assign({}, prev, {
              getMaterials: [newSuscription, ...prev.getMaterials],
            });
          },
        });
      }}
    />
  );
};

export default MaterialsTable;
