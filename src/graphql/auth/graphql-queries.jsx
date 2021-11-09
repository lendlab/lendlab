import { gql } from "@apollo/client";

export const ME = gql`
  query MeQuery {
    me {
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
      telefono
      foto_usuario
      direccion
      nombre
      cedula
    }
  }
`;
