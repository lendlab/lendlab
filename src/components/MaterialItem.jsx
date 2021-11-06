import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { Box, Circle, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { FiBox } from "react-icons/fi";

import MaterialInfoModal from "./MaterialInfoModal";

const MaterialItem = ({ material }) => {
  return (
    <Box
      bg="white"
      borderColor="lendlab.light.black.300"
      borderWidth="1px "
      maxW="72"
      minH="80"
      rounded="md"
      w="full"
    >
      <Image
        borderTopRadius="md"
        h="36"
        objectFit="cover"
        src="https://picsum.photos/200/300"
        srcfallback="/images/fallback.jpg"
        w="full"
      />
      <Stack align="start" p="6" w="full">
        <Stack align="center" direction="row">
          <Circle bg="lendlab.light.black.300" h="30px" w="30px">
            <Icon as={FiBox} />
          </Circle>
          <Text as="b" color="lendlab.light.black.1000" fontWeight="bold">
            {material.nombre}
          </Text>
        </Stack>
        <Text noOfLines={2}>{material.descripcion}</Text>
        <MaterialInfoModal material={material} />
      </Stack>
    </Box>
  );
};

export default MaterialItem;
