import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query Query {
    getUsers {
      cedula
      nombre
      foto_usuario
      direccion
      telefono
      tipo_usuario
      fecha_nacimiento
      institution {
        id_institution
      }
      course {
        course_token
      }
    }
  }
`;

export const GET_USER = gql`
  query Query($cedula: Int!) {
    getUser(cedula: $cedula) {
      cedula
      nombre
      direccion
      foto_usuario
      course {
        course_token
      }
      institution {
        id_institution
      }
      fecha_nacimiento
      tipo_usuario
      telefono
    }
  }
`;
