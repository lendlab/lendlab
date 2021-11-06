import { Table } from "@components/Table";
import React from "react";
import TableSkeleton from "@components/Table/TableSkeleton";
import { useInstitutions } from "@graphql/institutions/custom-hooks";

import { COLUMNS } from "./columns";

const InstitutionsTable = () => {
  const { loading, error, data } = useInstitutions();

  if (loading || !data) {
    return <TableSkeleton theads={["ID", "Nombre", "Ciudad", "Tipo", "Teléfono"]} />;
  }

  if (error) {
    return error.message;
  }

  return <Table columns={COLUMNS} data={data.getInstitutions} id="Instituciones" />;
};

export default InstitutionsTable;
