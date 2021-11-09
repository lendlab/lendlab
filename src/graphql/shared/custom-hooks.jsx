import { useQuery } from "@apollo/client";

import { GET_ALL_USERS_AND_MATERIALS } from "./graphql-queries";

export const useUsersAndMaterials = (id_institution) => {
  const result = useQuery(GET_ALL_USERS_AND_MATERIALS, {
    variables: {
      idInstitution: id_institution,
      getStudentsByInstitutionIdInstitution2: id_institution,
    },
  });

  return result;
};
