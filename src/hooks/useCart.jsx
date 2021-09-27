import { useContext } from "react";

import { CartContext } from "../context/CartContext";

export const useCart = () => {
  const { cartState, addMaterialToCart, deleteMaterialFromCart, filterMaterials, clearCart } =
    useContext(CartContext);

  const { cart, materials, selectedMaterial } = cartState;

  return {
    cart,
    clearCart,
    materials,
    selectedMaterial,
    filterMaterials,
    addMaterialToCart,
    cartCount: cart.length,
    deleteMaterialFromCart,
  };
};
