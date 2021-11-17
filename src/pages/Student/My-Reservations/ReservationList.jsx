import { Stack } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { useMe } from "@graphql/auth/custom-hook";
import { useUserReservations } from "@graphql/reservations/custom-hooks";
import React from "react";
import { groupAndMerge } from "@utils/groupAndMerge";
import { ReservationItem } from "./ReservationItem";

export const ReservationList = (props) => {
  const { data: dataMe } = useMe();

  const { loading, data, error } = useUserReservations(dataMe?.me.cedula);

  let mergedReservations;

  if (loading || !data) return <Spinner />;

  mergedReservations = groupAndMerge(
    data?.getUserReservations,
    "id_reserva",
    "material"
  );

  return (
    <Stack>
      {mergedReservations.map((reservation) => (
        <ReservationItem
          key={reservation.id_reserva}
          reservation={reservation}
        />
      ))}
    </Stack>
  );
};
