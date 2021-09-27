import React, { useReducer } from "react";
import { materials } from "@utils/constants/materials";

import { CartContext } from "./CartContext";
import { cartReducer } from "./cartReducer";

const INITIAL_STATE = {
  cart: [],
  materials,
  selectedMaterials: [],
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const addMaterialToCart = (material) => {
    dispatch({ type: "ADD_MATERIAL", payload: material });
  };

  const deleteMaterialFromCart = (nombre) => {
    dispatch({ type: "DELETE_MATERIAL", payload: nombre });
  };

  const filterMaterials = (nombre) => {
    dispatch({ type: "FILTER_MATERIALS", payload: nombre });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{ cartState, addMaterialToCart, deleteMaterialFromCart, filterMaterials, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
