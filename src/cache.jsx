import { InMemoryCache, makeVar } from "@apollo/client";

export const cartItemsVar = makeVar([]);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartItemsVar();
          },
        },
        itemsCount: {
          read() {
            return cartItemsVar().length;
          },
        },
      },
    },
  },
});
