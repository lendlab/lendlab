import { gql } from "@apollo/client";

export const CREATE_MATERIAL = gql`
  mutation NewMaterialMutation($newMaterialData: MaterialInput!) {
    newMaterial(data: $newMaterialData) {
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

export const DELETE_MATERIAL = gql`
  mutation DeleteReservationMutation($idMaterial: Int!) {
    deleteMaterial(id_material: $idMaterial)
  }
`;

export const UPDATE_MATERIAL = gql`
  mutation UpdateMaterialMutation(
    $updateMaterialData: MaterialUpdateInput!
    $updateMaterialIdMaterial: Int!
  ) {
    updateMaterial(data: $updateMaterialData, id_material: $updateMaterialIdMaterial) {
      nombre
      etiqueta
      categoria
      descripcion
      cantidad
      estado
      foto
    }
  }
`;

export const GET_POPULAR_MATERIALS = gql`
  query Query {
    getPopularMaterials {
      id_material
      nombre
      etiqueta
      categoria
      descripcion
      estado
      foto
      cantidad
    }
  }
`;

export const GET_MATERIAL_SEARCH = gql`
  query Query($nombre: String!) {
    getMaterialSearch(nombre: $nombre) {
      id_material
      etiqueta
      nombre
      categoria
      descripcion
      cantidad
      foto
      estado
    }
  }
`;
