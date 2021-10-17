import { useContext } from "react";

import { CartContext } from "../context/CartContext";

export const useCart = () => {
  const {
    cartState,
    addMaterialToCart,
    deleteMaterialFromCart,
    filterMaterials,
    clearCart,
    getMaterials,
  } = useContext(CartContext);

  const { cart, materials, foundMaterials, isSearching, selectedMaterial } = cartState;

  return {
    cart,
    getMaterials,
    clearCart,
    materials,
    foundMaterials,
    isSearching,
    selectedMaterial,
    filterMaterials,
    addMaterialToCart,
    cartCount: cart.length,
    deleteMaterialFromCart,
  };
};
