import {
  FormControl as ChakraFormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { useField } from "formik";
import React from "react";
import { Input, Select } from "@components/inputs";
import { Text } from "@components/texts";

export const FormControl = ({
  help,
  label,
  isCentered,
  control,
  labelAlign,
  children,
  ...props
}) => {
  const [field, meta] = useField(props);

  const inputTypes = {
    input() {
      return (
        <Input {...field} {...props} name={field.name}>
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
    >
      <FormLabel htmlFor={field.name}>
        <Text
          fontSize="12px"
          {...{
            ...(labelAlign == undefined ? { textAlign: "left" } : { textAlign: labelAlign }),
          }}
        >
          {label}
        </Text>
      </FormLabel>
      {selectedType}
      {meta.error ? <FormErrorMessage fontSize="12px"> {meta.error}</FormErrorMessage> : null}
    </ChakraFormControl>
  );
};
