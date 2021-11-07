import { gql } from "@apollo/client";

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
      institution {
        id_institution
        institution_name
      }
      course {
        course_token
        course_name
      }
    }
  }
`;
