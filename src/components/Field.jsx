import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/input";
import { Icon as ChakraIcon, IconButton } from "@chakra-ui/react";
import { FastField, useField } from "formik";
import React, { useCallback, useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

export const Field = ({ isPassword, label, show, handleShow, icon: Icon, ...props }) => {
  const [field, { error }] = useField(props);

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <InputGroup>
        {Icon && (
          <InputLeftElement
            children={<ChakraIcon as={Icon} color="lendlab.light.black.800" />}
            pointerEvents="none"
          />
        )}

        <Input {...field} {...props} id={field.name} />

        {isPassword && (
          <InputRightElement width="4.5rem">
            <IconButton
              h="1.75rem"
              icon={
                show ? (
                  <HiOutlineEye color="lendlab.light.black.800" />
                ) : (
                  <HiOutlineEyeOff color="lendlab.light.black.800" />
                )
              }
              size="sm"
              onClick={handleShow}
            />
          </InputRightElement>
        )}
      </InputGroup>

      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
