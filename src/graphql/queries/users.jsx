import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query Query {
    getUsers {
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

export const DELETE_USER = gql`
  mutation DeleteUserMutation($deleteUserCedula: Int!) {
    deleteUser(cedula: $deleteUserCedula) {
      cedula
    }
  }
`;
