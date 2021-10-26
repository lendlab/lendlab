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
    openCart,
    closeCart,
  } = useContext(CartContext);

  const { cart, isOpen, materials, foundMaterials, isSearching, selectedMaterial } = cartState;

  return {
    cart,
    getMaterials,
    isOpen,
    clearCart,
    openCart,
    closeCart,
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
