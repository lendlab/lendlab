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

export const GET_RESERVATION_MAX_ID = gql`
  query Query {
    getMaxId
  }
`;

export const GET_RESERVATIONS_BY_INSTITUTION = gql`
  query GetReservationsByInstitution($idInstitution: Int!) {
    getReservationsByInstitution(id_institution: $idInstitution) {
      id_reserva
      fecha_hora
      finalizada
      user {
        cedula
        nombre
        direccion
        foto_usuario
        telefono
        tipo_usuario
        fecha_nacimiento
        course {
          course_name
          course_token
          institution {
            id_institution
            institution_name
          }
        }
      }
      material {
        id_material
        nombre
        etiqueta
        categoria
        descripcion
        cantidad
        estado
      }
      institution {
        id_institution
        institution_name
        city
        type
        phone
      }
    }
    getMaxId
  }
`;

export const GET_USER_RESERVATIONS = gql`
  query Query($cedula: Int!) {
    getUserReservations(cedula: $cedula) {
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
      institution {
        id_institution
        institution_name
      }
    }
  }
`;
