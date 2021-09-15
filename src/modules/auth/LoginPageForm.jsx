import React from "react";
import { FormikStep, FormikStepper, FormControl } from "@ui";
import { Card } from "@icons";
import { InputLeftElement } from "@chakra-ui/input";
import * as Yup from "yup";

export const LoginPageForm = () => {
  const validationSchema1 = Yup.object().shape({
    cedula: Yup.string()
      .matches(/^[0-9]+$/, "Solo números")
      .max(9, "No hay cedula de 10 cifras")
      .required("Se requiere este campo"),
  });

  const validationSchema2 = Yup.object().shape({
    password: Yup.string()
      .min(2, "Muy corto")
      .max(45, "Muy largo")
      .required("Se requiere este campo"),
    institution: Yup.string().required("Se requiere este campo"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => setSubmitting(false), 2000);
  };

  return (
    <FormikStepper
      initialValues={{
        cedula: "",
        password: "",
        institution: "",
      }}
      onSubmit={async (values) => {
        await sleep(3000);
      }}
    >
      <FormikStep validationSchema={validationSchema1}>
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
      </FormikStep>
      <FormikStep validationSchema={validationSchema2}>
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
