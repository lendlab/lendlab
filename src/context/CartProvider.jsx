import React, { useReducer } from "react";
import { materials } from "@utils/constants/materials";

import { CartContext } from "./CartContext";
import { cartReducer } from "./cartReducer";

const INITIAL_STATE = {
  cart: [
    {
      nombre: "Ceibalita",
      src: "https://www.lr21.com.uy/wp-content/uploads/2020/03/plan-ceibal.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur . Duis aute irure dolor in reprehenderit",
    },
    {
      nombre: "Auricular",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Earphones_BW_2011-12-10_15-49-08.JPG/1200px-Earphones_BW_2011-12-10_15-49-08.JPG",
      desc: "Lorem ipsum dolor sit amet, consectetur . Duis aute irure dolor in reprehenderit",
    },
  ],
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
