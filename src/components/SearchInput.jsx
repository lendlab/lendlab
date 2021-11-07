import { Stack } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { useHistory } from "react-router";

import { Field } from "./Field";

const SearchInput = () => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{ material: "" }}
      validateOnChange={false}
      onSubmit={(values) => {
        history.push(`/app/busqueda/${values.material}`);
      }}
    >
      {() => (
        <Stack as={Form} spacing="0" w="full">
          <Field isFullWidth icon={FiSearch} name="material" placeholder="Buscar material..." />
        </Stack>
      )}
    </Formik>
  );
};

export default SearchInput;
