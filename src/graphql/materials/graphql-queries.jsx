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
