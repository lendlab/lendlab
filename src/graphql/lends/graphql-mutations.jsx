import { gql } from "@apollo/client";

export const CREATE_LEND = gql`
  mutation Mutation($data: LendInput!) {
    createLend(data: $data) {
      id_lend
      fecha_hora_presta
      fecha_vencimiento
      fecha_devolucion
      laboratorist
      reservation {
        id_reserva
        fecha_hora
      }
    }
  }
`;
