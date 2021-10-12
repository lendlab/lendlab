import { gql } from "@apollo/client";

export const CREATE_LEND = gql`
  mutation CreateLendMutation($data: LendInput!) {
    createLend(data: $data) {
      id_lend
      fecha_vencimiento
      fecha_devolucion
      fecha_hora_presta
      reservation {
        id_reserva
      }
    }
  }
`;
