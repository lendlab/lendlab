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
      course {
        course_token
      }
    }
  }
`;
