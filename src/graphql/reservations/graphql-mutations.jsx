import { gql } from "@apollo/client";

export const CREATE_RESERVATION = gql`
  mutation Mutation($data: ReservationInput!) {
    createReservation(data: $data) {
      id_reserva
      fecha_hora
      finalizada
      user {
        cedula
      }
      material {
        id_material
      }
    }
  }
`;

export const UPDATE_RESERVATION = gql`
  mutation Mutation($data: ReservationEditInput!, $idReserva: Int!) {
    updateReservation(data: $data, id_reserva: $idReserva) {
      id_reserva
      fecha_hora
      finalizada
      user {
        cedula
      }
      material {
        id_material
      }
    }
  }
`;

export const DELETE_RESERVATION = gql`
  mutation Mutation($idReserva: Int!) {
    deleteReservation(id_reserva: $idReserva)
  }
`;
