import { gql } from "@apollo/client";

export const SUBSCRIBE_TO_MATERIALS = gql`
  subscription Subscription {
    newMaterialSubscription {
      id_material
      nombre
      etiqueta
      categoria
      descripcion
      cantidad
      estado
      institution {
        id_institution
      }
    }
  }
`;
