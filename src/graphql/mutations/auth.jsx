import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation LoginMutation($options: CedulaPasswordInput!) {
    login(options: $options) {
      user {
        cedula
        nombre
        direccion
        foto_usuario
        telefono
        tipo_usuario
        fecha_nacimiento
      }
      errors {
        field
        message
      }
    }
  }
`;

export const ME = gql`
  query Query {
    me {
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

export const LOGOUT = gql`
  mutation Mutation {
    logout
  }
`;
