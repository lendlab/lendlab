import {
  FormControl as ChakraFormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { useField } from "formik";
import React from "react";
import { Input, Select, Text } from "@ui";

export const FormControl = ({
  help,
  label,
  isCentered,
  isRequired,
  control,
  isLabelLeft,
  children,
  maxW,
  ...props
}) => {
  const [field, meta, { setValue }] = useField(props);

  const inputTypes = {
    input() {
      return (
        <Input {...field} {...props} maxW={maxW} name={field.name} setValue={setValue}>
          {children}
        </Input>
      );
    },
    select() {
      return (
        <Select {...field} {...props} name={field.name}>
          {children}
        </Select>
      );
    },
  };

  const selectedType = inputTypes[control]();

  return (
    <ChakraFormControl
      {...{
        ...(isCentered && { display: "flex", alignItems: "center", flexDirection: "column" }),
      }}
      isInvalid={meta.touched && meta.error}
      isRequired={isRequired}
    >
      {label && (
        <FormLabel display="inline-block" htmlFor={field.name}>
          <Text display="inline-block" fontSize="12px" textAlign={isLabelLeft && "left"}>
            {label}
          </Text>
        </FormLabel>
      )}
      {selectedType}
      {meta.error ? <FormErrorMessage fontSize="12px"> {meta.error}</FormErrorMessage> : null}
    </ChakraFormControl>
  );
};
