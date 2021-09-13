import { Image } from "@chakra-ui/image";
import { motion } from "framer-motion";
import React from "react";
import InView from "react-intersection-observer";

const MotionImage = motion(Image);

const WhiteCircle = ({ size, ...props }) => {
  const circles = {
    big: "/images/bigSizeCircle.svg",
    medium: "/images/mediumSizeCircle.svg",
    little: "/images/littleSizeCircle.svg",
  };

  return (
    <InView threshold={0}>
      {({ ref, inView }) => (
        <MotionImage
          ref={ref}
          animate={inView && { y: 0, opacity: 1 }}
          as={motion.img}
          initial={{ y: "-10vh", opacity: 0 }}
          src={circles[size]}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          zIndex="-9999"
          {...props}
        />
      )}
    </InView>
  );
};

export default WhiteCircle;
