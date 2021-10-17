export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ALL_MATERIALS":
      return {
        ...state,
        materials: action.payload,
      };
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
            return cart.id_material != action.payload;
          }),
        ],
      };
    case "FILTER_MATERIALS":
      return {
        ...state,
        isSearching: !!action.payload.length > 0 || false,
        foundMaterials: [
          ...state.materials.filter(({ ...material }) => {
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
