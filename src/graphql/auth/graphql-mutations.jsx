import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation LoginMutation($options: CedulaPasswordInput!) {
    login(options: $options) {
      user {
        course {
          course_token
          course_name
          institution {
            id_institution
            institution_name
            city
            type
            phone
          }
        }
        fecha_nacimiento
        tipo_usuario
        foto_usuario
        telefono
        direccion
        nombre
        cedula
      }
    }
  }
`;

export const LOGOUT = gql`
  mutation Mutation {
    logout
  }
`;
