import { gql } from "@apollo/client";

export const GET_ALL_RESERVATIONS = gql`
  query Query {
    getReservations {
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

export const GET_ALL_RESERVATIONS_WITH_MAXID = gql`
  query Query {
    getReservations {
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
    getMaxId
  }
`;
