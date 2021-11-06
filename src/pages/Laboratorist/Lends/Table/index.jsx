import { Table } from "@components/Table";
import { useLends } from "@graphql/lends/custom-hooks";
import React from "react";
import TableSkeleton from "@components/Table/TableSkeleton";

import { COLUMNS } from "./columns";

const LendsTable = () => {
  const { loading, error, data } = useLends();

  if (loading || !data) {
    return <TableSkeleton theads={["ID", "Fecha y Hora", "Plazo", "Devolucion", "Reserva"]} />;
  }

  if (error) {
    return error.message;
  }

  return <Table columns={COLUMNS} data={data.lend} id="Prestamos" />;
};

export default LendsTable;
