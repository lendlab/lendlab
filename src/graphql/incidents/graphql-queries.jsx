import { gql } from "@apollo/client";

export const GET_ALL_INCIDENTS = gql`
  query Query {
    getIncidents {
      id_incident
      observations
      repairs
      complaint
      solved
      date
      material {
        id_material
        nombre
        institution {
          id_institution
          institution_name
        }
      }
    }
  }
`;
