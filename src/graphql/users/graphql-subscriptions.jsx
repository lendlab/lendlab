import { gql } from "@apollo/client";

export const SUBSCRIBE_TO_USERS = gql`
  subscription Subscription {
    newUserSubscription {
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
        course_token
      }
    }
  }
`;
