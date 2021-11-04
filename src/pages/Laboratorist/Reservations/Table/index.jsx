import { Table } from "@components/Table";
import TableSkeleton from "@components/Table/TableSkeleton";
import { useReservationsAndMaxId } from "@graphql/reservations/custom-hooks";
import { groupAndMerge } from "@utils/groupAndMerge";
import React from "react";

import { COLUMNS } from "./columns";

const ReservationsTable = () => {
  const { loading, error, data } = useReservationsAndMaxId();
  let mergedReservations;

  if (loading || !data) {
    return <TableSkeleton theads={["ID", "Fecha y Hora", "Finalizada", "Usuario", "Materiales"]} />;
  } else {
    mergedReservations = groupAndMerge(data?.getReservations, "id_reserva", "material");
  }

  if (error) {
    return error.message;
  }

  return <Table columns={COLUMNS} data={mergedReservations} />;
};

export default ReservationsTable;
