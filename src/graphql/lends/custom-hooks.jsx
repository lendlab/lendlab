import { useQuery } from "@apollo/client";

import { GET_ALL_LENDS } from "./graphql-queries";

export const useLends = () => {
  const result = useQuery(GET_ALL_LENDS, {
    pollInterval: 10000,
  });

  return result;
};
