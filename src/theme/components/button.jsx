const Button = {
  variants: {
    solid: {
      bgGradient: "linear(to-r, lendlab.blue.100, lendlab.blue.200)",
      color: "lendlab.white",
      borderRadius: 999999,
      fontWeight: "bold",
      cursor: "pointer",
      _hover: {
        boxShadow: "lg",
        bgGradient: "linear(to-r, lendlab.blue.100, lendlab.blue.200)",
      },
      _active: {
        bgGradient: "linear(to-r, lendlab.blue.100, lendlab.blue.200)",
      },
    },
  },
};

export default Button;
