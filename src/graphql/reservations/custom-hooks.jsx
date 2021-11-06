import { useMutation, useQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/react";

import { GET_ALL_RESERVATIONS_WITH_MAXID } from "./graphql-queries";
import { DELETE_RESERVATION, UPDATE_RESERVATION } from "./graphql-mutations";
import { RESERVATIONS_SUSCRIPTION } from "./graphql-suscriptions";

export const useReservationsAndMaxId = () => {
  const result = useQuery(GET_ALL_RESERVATIONS_WITH_MAXID, {});

  return [result, RESERVATIONS_SUSCRIPTION];
};

export const useReservation = (id) => {
  const result = useQuery(GET_MATERIAL, { variables: { idMaterial: parseInt(id) } });

  const [updateReservation] = useMutation(UPDATE_RESERVATION, {
    onCompleted: ({ updateReservation }) => {
      toast({
        title: "Reserva modificada con éxito",
        description: "Se ha modificado correctamente la reserva #" + updateReservation.id_reserva,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    },
  });

  return [updateReservation, result];
};

export const useDeleteReservation = () => {
  const toast = useToast();

  const [deleteReservation, result] = useMutation(DELETE_RESERVATION, {
    onCompleted: () =>
      toast({
        title: "Reserva eliminada con éxito",
        description: "La reserva se ha eliminado con éxito",
        status: "success",
        duration: 5000,
        isClosable: true,
      }),
  });

  return [deleteReservation, result];
};
