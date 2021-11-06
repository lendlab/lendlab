import { Table } from "@components/Table";
import TableSkeleton from "@components/Table/TableSkeleton";
import { useIncidents } from "@graphql/incidents/custom-hooks";
import React from "react";

import { COLUMNS } from "./columns";

const IncidentsTable = () => {
  const { loading, error, data } = useIncidents();

  if (loading || !data) {
    return (
      <TableSkeleton
        theads={[
          "ID",
          "Observaciones",
          "Reparaciones",
          "Denuncias",
          "Resuelto",
          "Fecha",
          "Material",
        ]}
      />
    );
  }

  if (error) {
    return error.message;
  }

  return <Table columns={COLUMNS} data={data.getIncidents} id="Incidentes" />;
};

export default IncidentsTable;
