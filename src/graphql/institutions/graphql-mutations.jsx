import { gql } from "@apollo/client";

export const CREATE_INSTITUTION = gql`
  mutation Mutation($data: InstitutionInput!) {
    newInstitution(data: $data) {
      id_institution
      institution_name
      city
      type
      phone
    }
  }
`;

export const DELETE_INSTITUTION = gql`
  mutation Mutation($idInstitution: Int!) {
    deleteInstitution(id_institution: $idInstitution)
  }
`;
