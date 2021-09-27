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
  mutation DeleteMaterialMutation($deleteMaterialIdMaterial: Int!) {
    deleteMaterial(id_material: $deleteMaterialIdMaterial) {
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
