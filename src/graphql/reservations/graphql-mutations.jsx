import { gql } from "@apollo/client";

export const CREATE_RESERVATION = gql`
  mutation CreateReservation($data: ReservationInput!) {
    createReservation(data: $data) {
      errors {
        field
        message
      }
      reservation {
        id_reserva
        fecha_hora
        finalizada
        material {
          id_material
        }
        user {
          cedula
        }
        institution {
          id_institution
        }
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
        nombre
      }
      material {
        id_material
        nombre
      }
    }
  }
`;

export const DELETE_RESERVATION = gql`
  mutation Mutation($idReserva: Int!) {
    deleteReservation(id_reserva: $idReserva)
  }
`;
