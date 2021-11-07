import { useMutation, useQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/react";

import { GET_ALL_RESERVATIONS_WITH_MAXID, GET_RESERVATION_MAX_ID } from "./graphql-queries";
import { CREATE_RESERVATION, DELETE_RESERVATION, UPDATE_RESERVATION } from "./graphql-mutations";
import { RESERVATIONS_SUSCRIPTION } from "./graphql-subscriptions";

export const useReservationsAndMaxId = () => {
  const result = useQuery(GET_ALL_RESERVATIONS_WITH_MAXID, {});

  return [result, RESERVATIONS_SUSCRIPTION];
};

export const useRejectOrAcceptReservation = () => {
  const toast = useToast();

  const [deleteReservation, resultDelete] = useMutation(DELETE_RESERVATION, {
    onCompleted: () =>
      toast({
        title: "Reserva rechazada con éxito",
        description: "La reserva se ha rechazado con éxito",
        status: "success",
        duration: 5000,
        isClosable: true,
      }),
  });

  const [updateReservation, resultUpdate] = useMutation(UPDATE_RESERVATION, {
    onCompleted: ({ updateReservation }) => {
      toast({
        title: "Reserva aceptada con éxito",
        description: "Se ha aceptado correctamente la reserva #" + updateReservation.id_reserva,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    },
  });

  return [deleteReservation, resultDelete, updateReservation, resultUpdate];
};

export const useCreateReservation = () => {
  const toast = useToast();
  const resultId = useQuery(GET_RESERVATION_MAX_ID);

  const [createReservation, resultCreate] = useMutation(CREATE_RESERVATION, {
    onCompleted: (data) => {
      toast({
        title: "Reserva creada con éxito",
        description:
          "Se ha creado correctamente la reserva #" + data.createReservation.reservation.id_reserva,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    },
  });

  return [createReservation, resultCreate, resultId];
};
