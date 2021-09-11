import { Image } from "@chakra-ui/image";
import React from "react";

const WhiteCircle = ({ size, ...props }) => {
  const circles = {
    big: "/images/bigSizeCircle.svg",
    medium: "/images/mediumSizeCircle.svg",
    little: "/images/littleSizeCircle.svg",
  };

  return <Image src={circles[size]} zIndex="-9999" {...props} />;
};

export default WhiteCircle;
