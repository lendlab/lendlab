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
