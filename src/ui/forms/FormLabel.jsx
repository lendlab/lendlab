import React from "react";
import { FormLabel as ChakraFormLabel, Text, Stack } from "@chakra-ui/react";
const FormLabel = ({ isRequired, name, children, ...props }) => {
  return (
    <Stack>
      <ChakraFormLabel alignItems="center" display="flex" htmlFor={name} {...props}>
        <Text>{children}</Text>
        {isRequired ? (
          <Text
            alignSelf="flex-start"
            color="lendlab.red.200"
            height={3}
            lineHeight="0.5rem"
            marginLeft={1}
            marginTop={1}
            padding={1}
            rounded="sm"
          >
            *
          </Text>
        ) : null}
      </ChakraFormLabel>
    </Stack>
  );
};

export default FormLabel;
