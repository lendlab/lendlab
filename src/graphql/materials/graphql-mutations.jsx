import { gql } from "@apollo/client";

export const CREATE_MATERIAL = gql`
  mutation NewMaterialMutation($data: MaterialInput!) {
    subMaterial(data: $data) {
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
  mutation UpdateMaterialMutation($data: MaterialUpdateInput!, $idMaterial: Int!) {
    updateMaterial(data: $data, id_material: $idMaterial) {
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
