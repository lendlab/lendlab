import { materials } from "@utils/constants/materials";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MATERIAL":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "DELETE_MATERIAL":
      return {
        ...state,
        cart: [
          ...state.cart.filter(({ ...cart }) => {
            return cart.nombre != action.payload;
          }),
        ],
      };
    case "FILTER_MATERIALS":
      return {
        ...state,
        materials: [
          ...materials.filter(({ ...material }) => {
            return material.nombre.toLowerCase().includes(action.payload.toLowerCase());
          }),
        ],
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
