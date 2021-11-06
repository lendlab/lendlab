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
        institution_name
        city
        phone
        type
      }
      course {
        course_id
        course_name
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
      telefono
      tipo_usuario
      fecha_nacimiento
    }
  }
`;
