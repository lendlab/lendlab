import { Table } from "@components/Table";
import TableSkeleton from "@components/Table/TableSkeleton";
import { useMe } from "@graphql/auth/custom-hook";
import { useReservationsByInstitution } from "@graphql/reservations/custom-hooks";
import { RESERVATIONS_SUSCRIPTION } from "@graphql/reservations/graphql-subscriptions";
import { groupAndMerge } from "@utils/groupAndMerge";
import React from "react";

import { COLUMNS } from "./columns";

const ReservationsTable = () => {
  const { data: dataMe, loading: loadingMe } = useMe();

  const [{ subscribeToMore, loading, error, data }] = useReservationsByInstitution(
    dataMe?.me.course.institution.id_institution
  );

  let mergedReservations;

  if (loading || !data) {
    return <TableSkeleton theads={["ID", "Fecha y Hora", "Finalizada", "Usuario", "Materiales"]} />;
  } else if (data.getReservationsByInstitution.length > 0) {
    mergedReservations = groupAndMerge(
      data?.getReservationsByInstitution,
      "id_reserva",
      "material"
    );
  }

  if (error) {
    return error.message;
  }

  return (
    <Table
      columns={COLUMNS}
      data={data.getReservationsByInstitution.length > 0 ? mergedReservations : []}
      id="Reservas"
      subscribeToNew={() => {
        subscribeToMore({
          document: RESERVATIONS_SUSCRIPTION,

          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;

            const newSuscription = subscriptionData.data.newReservationSubscription;

            return Object.assign({}, prev, {
              getReservationsByInstitution: [newSuscription, ...prev.getReservationsByInstitution],
            });
          },
        });
      }}
    />
  );
};

export default ReservationsTable;
