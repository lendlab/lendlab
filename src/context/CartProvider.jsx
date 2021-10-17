import { useApolloClient } from "@apollo/client";
import React, { useReducer, useState } from "react";

import { GET_ALL_MATERIALS } from "../graphql/queries/materials";

import { CartContext } from "./CartContext";
import { cartReducer } from "./cartReducer";

const INITIAL_STATE = {
  cart: [],
  materials: [],
  isSearching: false,
  selectedMaterials: [],
  foundMaterials: [],
};

export const CartProvider = ({ children }) => {
  const { mutate, query } = useApolloClient();
  const [cartState, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  async function getMaterials() {
    const { data } = await query({
      query: GET_ALL_MATERIALS,
    });

    if (data) {
      dispatch({ type: "ADD_ALL_MATERIALS", payload: data.getMaterials });
    }
  }
  const addMaterialToCart = (material) => {
    dispatch({ type: "ADD_MATERIAL", payload: material });
  };

  const deleteMaterialFromCart = (id) => {
    dispatch({ type: "DELETE_MATERIAL", payload: id });
  };

  const filterMaterials = (nombre) => {
    dispatch({ type: "FILTER_MATERIALS", payload: nombre });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        addMaterialToCart,
        getMaterials,
        deleteMaterialFromCart,
        filterMaterials,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
