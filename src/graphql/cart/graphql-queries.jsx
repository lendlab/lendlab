import { gql } from "@apollo/client";

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
    itemsCount @client
  }
`;
