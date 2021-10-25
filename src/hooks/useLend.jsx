import { useMutation, useQuery } from "@apollo/client";
import { CREATE_LEND } from "@graphql/mutations/lends";
import { CREATE_RESERVATION } from "@graphql/mutations/reservations";
import { GET_ALL_RESERVATIONS } from "@graphql/queries/reservations";
import { groupAndMerge } from "@utils/groupAndMerge";

export const useLend = () => {
  const [createLend, { data: createLendData, loading: createLendLoading, error: createLendError }] =
    useMutation(CREATE_LEND);

  const [createReservation, { loading: createReservationLoading, error: createReservationError }] =
    useMutation(CREATE_RESERVATION);

  const {
    loading: loadingReservation,
    error: errorReservation,
    data: dataReservation,
  } = useQuery(GET_ALL_RESERVATIONS);

  const reservationsGrouped =
    dataReservation && groupAndMerge(dataReservation.getReservations, "id_reserva", "material");

  const maxReserveId = dataReservation && reservationsGrouped.length + 1;

  return {
    createReservationLoading,
    createLendLoading,
    maxReserveId,
    createLend,
    createReservation,
  };
};
