import {
  Input as ChakraInput,
  InputRightElement,
  InputGroup,
  Button,
  Fade,
} from "@chakra-ui/react";
import React from "react";

export const Input = ({
  children,
  w,
  maxW,
  setValue,
  isGlobalFilter,
  setGlobalFilter,
  ...props
}) => {
  return (
    <InputGroup maxW={maxW} size="lg" w={w}>
      {children}
      <Fade in={props.value != ""} initialScale={0.1} unmountOnExit={true}>
        <InputRightElement
          children={
            <Button
              aria-label="clear search"
              color="black"
              size="sm"
              variant="ghost"
              onClick={() => {
                setValue("");
                {
                  isGlobalFilter && setGlobalFilter("");
                }
              }}
            >
              x
            </Button>
          }
        />
      </Fade>

      <ChakraInput
        {...props}
        _placeholder={{ color: "lendlab.gray.300", fontSize: "13px" }}
        bg="lendlab.gray.100"
        borderRadius="17"
        fontSize="13px"
        variant="filled"
      />
    </InputGroup>
  );
};
