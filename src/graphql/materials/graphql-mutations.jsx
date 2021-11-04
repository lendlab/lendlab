import { gql } from "@apollo/client";

export const CREATE_MATERIAL = gql`
  mutation NewMaterialMutation($data: MaterialInput!) {
    newMaterial(data: $data) {
      id_material
      nombre
      etiqueta
      descripcion
      categoria
      cantidad
      foto
      estado
      institution {
        id_institution
      }
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
