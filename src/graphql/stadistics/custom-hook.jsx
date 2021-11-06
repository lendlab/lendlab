import { useQuery } from "@apollo/client";

import { GET_STADISTICS } from "./graphql-queries";

export const useStadistics = () => {
  const result = useQuery(GET_STADISTICS);

  return result;
};
