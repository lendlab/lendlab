import Icon from "@chakra-ui/icon";
import { Box, Circle, Stack, Text, WrapItem } from "@chakra-ui/layout";
import React from "react";

const Stadistic = ({ title, number, icon }) => {
  return (
    <WrapItem flex="1" h="full" maxW={{ md: "72", base: "full" }} minH="44">
      <Box
        bg="white"
        borderColor="lendlab.light.black.300"
        borderWidth="1px "
        p="6"
        rounded="md"
        w="full"
      >
        <Stack align="center" direction="row">
          <Icon as={icon} color="lendlab.light.black.1000" />
          <Text color="lendlab.light.black.1000" fontWeight="bold">
            {title}
          </Text>
        </Stack>
        <Text color="lendlab.light.black.1000" fontSize="8" fontWeight="bold" py="2">
          {number}
        </Text>
      </Box>
    </WrapItem>
  );
};

export default Stadistic;
