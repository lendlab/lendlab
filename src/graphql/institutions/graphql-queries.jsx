import { gql } from "@apollo/client";

export const GET_INSTITUTIONS = gql`
  query Query {
    getInstitutions {
      id_institution
      institution_name
      city
      type
      phone
    }
  }
`;
