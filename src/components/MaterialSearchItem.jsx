import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Badge, Box, Circle, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { FiBox } from "react-icons/fi";

import { cartItemsVar } from "@/cache";

const MaterialSearchItem = ({ material }) => {
  return (
    <Stack
      as={Box}
      bg="lendlab.light.black.100"
      borderColor="lendlab.light.black.300"
      borderWidth="1px"
      minH="44"
      p="6"
      rounded="md"
      spacing="4"
      w="full"
    >
      <Stack align="center" direction="row" justify="space-between" w="full">
        <Stack align="center" direction="row">
          <Circle bg="lendlab.light.black.300" h="30px" w="30px">
            <Icon as={FiBox} />
          </Circle>
          <Text as="b" variant="bold">
            {material.nombre}
          </Text>
        </Stack>
        <Stack align="center" direction="row">
          <Badge variant="solid">{material.categoria}</Badge>
          <Badge variant="solid">{material.estado}</Badge>
        </Stack>
      </Stack>

      <Text>{material.descripcion}</Text>
      <Button
        isFullWidth
        variant="primary"
        onClick={() => {
          cartItemsVar([...cartItemsVar(), material]);
        }}
      >
        Agregar al carrito
      </Button>
    </Stack>
  );
};

export default MaterialSearchItem;
