import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation Mutation($data: UserInput!) {
    register(data: $data) {
      cedula
      nombre
      direccion
      foto_usuario
      telefono
      tipo_usuario
      fecha_nacimiento
      institution {
        id_institution
      }
      course {
        course_id
      }
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
