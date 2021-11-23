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

export const GET_INSTITUTION = gql`
  query GetInstitution($idInstitution: Float!) {
    getInstitution(id_institution: $idInstitution) {
      id_institution
      institution_name
      city
      type
      phone
    }
  }
`;
