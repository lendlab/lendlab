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
      institution {
        id_institution
      }
    }
  }
`;

export const UPDATE_LEND = gql`
  mutation UpdateLend($data: LendUpdateInput!, $fechaHoraPresta: String!, $idLend: Int!) {
    updateLend(data: $data, fecha_hora_presta: $fechaHoraPresta, id_lend: $idLend) {
      id_lend
      fecha_hora_presta
      fecha_vencimiento
      fecha_devolucion
      reservation {
        id_reserva
        fecha_hora
        user {
          cedula
          nombre
        }
        material {
          id_material
          nombre
        }
      }
      laboratorist {
        cedula
        nombre
      }
      institution {
        id_institution
        institution_name
      }
    }
  }
`;
