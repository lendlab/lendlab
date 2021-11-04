import { Table } from "@components/Table";
import React from "react";
import { useMaterials } from "@graphql/materials/custom-hooks";
import TableSkeleton from "@components/Table/TableSkeleton";

import { COLUMNS } from "./columns";

const MaterialsTable = () => {
  const { loading, error, data } = useMaterials();

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

  return <Table columns={COLUMNS} data={data.getMaterials} />;
};

export default MaterialsTable;
