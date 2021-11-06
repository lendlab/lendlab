import { useQuery } from "@apollo/client";

import { GET_ALL_USERS_AND_MATERIALS } from "./graphql-queries";

export const useUsersAndMaterials = () => {
  const result = useQuery(GET_ALL_USERS_AND_MATERIALS);

  return result;
};
