import { FormControl as ChakraFormControl, FormErrorMessage } from "@chakra-ui/form-control";
import { ErrorMessage, useField } from "formik";
import React from "react";

import Input from "~/ui/inputs/Input";

import FormLabel from "./FormLabel";

const Field = ({ help, label, isRequired, children, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <ChakraFormControl isInvalid={meta.touched && meta.error}>
      <FormLabel isRequired={isRequired} name={field.name} padding={0}>
        {label}
      </FormLabel>
      <Input {...field} {...props} name={field.name}>
        {children}
      </Input>
      <FormErrorMessage>
        <ErrorMessage component="div" name={field.name} />
      </FormErrorMessage>
    </ChakraFormControl>
  );
};

export default Field;
