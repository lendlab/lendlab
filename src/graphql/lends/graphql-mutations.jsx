import { gql } from "@apollo/client";

export const CREATE_LEND = gql`
  mutation Mutation($data: LendInput!) {
    createLend(data: $data) {
      id_lend
      fecha_hora_presta
      fecha_vencimiento
      fecha_devolucion
      reservation {
        id_reserva
        fecha_hora
      }
      laboratorist {
        cedula
      }
    }
  }
`;

export const UPDATE_LEND = gql`
  mutation Mutation($data: LendUpdateInput!, $idLend: Int!) {
    updateLend(data: $data, id_lend: $idLend) {
      id_lend
      fecha_devolucion
      reservation {
        id_reserva
        fecha_hora
      }
      laboratorist {
        cedula
      }
      fecha_vencimiento
      fecha_hora_presta
    }
  }
`;
