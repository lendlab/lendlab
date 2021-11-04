import { useQuery } from "@apollo/client";

import { GET_ALL_RESERVATIONS_WITH_MAXID } from "./graphql-queries";

export const useReservationsAndMaxId = () => {
  const result = useQuery(GET_ALL_RESERVATIONS_WITH_MAXID);

  return result;
};
