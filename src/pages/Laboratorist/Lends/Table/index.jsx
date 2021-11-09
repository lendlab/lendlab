import { Table } from "@components/Table";
import TableSkeleton from "@components/Table/TableSkeleton";
import { useMe } from "@graphql/auth/custom-hook";
import { useLendsByInstitution } from "@graphql/lends/custom-hooks";
import { SUBSCRIBE_TO_LENDS } from "@graphql/lends/graphql-subscriptions";
import React from "react";

import { COLUMNS } from "./columns";

const LendsTable = () => {
  const { data: dataMe } = useMe();

  const { loading, error, data, subscribeToMore } = useLendsByInstitution(
    dataMe?.me.course.institution.id_institution
  );

  if (loading || !data) {
    return <TableSkeleton theads={["ID", "Fecha y Hora", "Plazo", "Devolucion", "Reserva"]} />;
  }

  if (error) {
    return error.message;
  }

  return (
    <Table
      columns={COLUMNS}
      data={data.getLendsByInstitution}
      id="Prestamos"
      subscribeToNew={() => {
        subscribeToMore({
          document: SUBSCRIBE_TO_LENDS,

          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;

            const newSuscription = subscriptionData.data.newLendSubscription;

            return Object.assign({}, prev, {
              getLendsByInstitution: [newSuscription, ...prev.getLendsByInstitution],
            });
          },
        });
      }}
    />
  );
};

export default LendsTable;
