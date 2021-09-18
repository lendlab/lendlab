import React from "react";
import { Text } from "@ui";
import { Tooltip, Circle } from "@chakra-ui/react";

export const Info = ({ tooltip }) => {
  return (
    <Tooltip label={tooltip}>
      <Circle bg="lendlab.gray.200" h="20px" w="20px">
        <Text color="lendlab.black.heading" fontSize="10px">
          i
        </Text>
      </Circle>
    </Tooltip>
  );
};
