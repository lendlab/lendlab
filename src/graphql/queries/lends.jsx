import { gql } from "@apollo/client";

export const GET_ALL_LENDS = gql`
  query Query {
    lend {
      id_lend
      fecha_hora_presta
      fecha_vencimiento
      fecha_devolucion
      reservation {
        id_reserva
      }
    }
  }
`;
