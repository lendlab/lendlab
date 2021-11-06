import { useQuery } from "@apollo/client";

import { GET_CART_ITEMS } from "./graphql-queries";

export const useCart = () => {
  const result = useQuery(GET_CART_ITEMS);

  return result;
};
