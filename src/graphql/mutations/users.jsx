import { gql } from "@apollo/client";

export const CREATE_USER = gql`mutation Mutation($registerData: UserInput!) {
    register(data: $registerData) {
      cedula
      nombre
      pass
      direccion
      foto_usuario
      telefono
      tipo_usuario
      fecha_nacimiento
    }
  }`;
