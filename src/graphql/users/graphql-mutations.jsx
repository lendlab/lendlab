import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation Mutation($data: UserInput!) {
    register(data: $data) {
      errors {
        field
        message
      }
      user {
        cedula
        nombre
        direccion
        foto_usuario
        telefono
        tipo_usuario
        fecha_nacimiento
        course {
          course_token
          course_name
        }
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUserMutation($cedula: Int!) {
    deleteUser(cedula: $cedula)
  }
`;

export const UPDATE_USER = gql`
  mutation Mutation($data: UserUpdateInput!, $cedula: Int!) {
    updateUser(data: $data, cedula: $cedula) {
      cedula
      nombre
      direccion
      foto_usuario
      telefono
      tipo_usuario
      fecha_nacimiento
      course {
        course_token
      }
    }
  }
`;
