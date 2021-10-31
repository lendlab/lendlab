import React from "react";
import { FormikStep, FormikStepper, FormControl } from "@ui";
import { Card } from "@icons";
import { InputLeftElement } from "@chakra-ui/input";
import { useMutation } from "@apollo/client";
import { LOGIN } from "@graphql/mutations/auth";
import { toErrorMap } from "@utils/toErrorMap";
import { useHistory } from "react-router";

export const LoginPageForm = () => {
  const [login] = useMutation(LOGIN);

  return (
    <FormikStepper
      initialValues={{
        cedula: "",
        password: "",
        institution: "",
      }}
      onSubmit={async (values, { setErrors }) => {
        const response = await login({
          variables: {
            options: { cedula: parseInt(values.cedula), password: values.password },
          },
          update: (cache) => {
            cache.evict({ fieldName: "me" });
          },
        });

        if (response.data?.login.errors) {
          setErrors(toErrorMap(response.data.login.errors));
        }
      }}
    >
      <FormikStep>
        <FormControl
          control="input"
          label="Continua con tu cedula"
          labelAlign="center"
          name="cedula"
          placeholder="ej. 54548246"
          type="text"
          w="100%"
        >
          <InputLeftElement children={<Card />} pointerEvents="none" />
        </FormControl>
        <FormControl
          control="input"
          label="Continua con tu contraseña"
          labelAlign="center"
          name="password"
          placeholder="ej. 54548246"
          type="password"
          w="100%"
        >
          <InputLeftElement children={<Card />} pointerEvents="none" />
        </FormControl>
        <FormControl
          control="select"
          label="Selecciona tu institución"
          labelAlign="center"
          name="institution"
          placeholder="Selecciona una institución"
          w="100%"
        />
      </FormikStep>
    </FormikStepper>
  );
};
