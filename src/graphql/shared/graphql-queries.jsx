import { gql } from "@apollo/client";

export const GET_ALL_USERS_AND_MATERIALS = gql`
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
    getMaterials {
      id_material
      nombre
      etiqueta
      categoria
      descripcion
      cantidad
      estado
    }
  }
`;
