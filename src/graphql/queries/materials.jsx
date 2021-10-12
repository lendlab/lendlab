import { gql } from "@apollo/client";

export const GET_ALL_MATERIALS = gql`
  query Query {
    getMaterials {
      id_material
      nombre
      etiqueta
      categoria
      descripcion
      cantidad
      foto
      estado
    }
  }
`;

export const GET_MATERIAL = gql`
  query Query($idMaterial: Int!) {
    getMaterial(id_material: $idMaterial) {
      id_material
      nombre
      etiqueta
      categoria
      descripcion
      cantidad
      foto
      estado
    }
  }
`;
