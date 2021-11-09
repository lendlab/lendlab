import { gql } from "@apollo/client";

export const GET_ALL_LENDS = gql`
  query GetLends {
    getLends {
      id_lend
      fecha_hora_presta
      fecha_vencimiento
      fecha_devolucion
      reservation {
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

export const GET_LENDS_BY_INSTITUTION = gql`
  query GetLendsByInstitution($idInstitution: Int!) {
    getLendsByInstitution(id_institution: $idInstitution) {
      id_lend
      fecha_hora_presta
      fecha_devolucion
      fecha_vencimiento
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
      institution {
        id_institution
        institution_name
      }
      laboratorist {
        cedula
        nombre
      }
    }
  }
`;

export const GET_USER_LENDS = gql`
  query GetUserLends($cedula: Int!) {
    getUserLends(cedula: $cedula) {
      id_lend
      fecha_hora_presta
      fecha_vencimiento
      fecha_devolucion
      reservation {
        id_reserva
        fecha_hora
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
