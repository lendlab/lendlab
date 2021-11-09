import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import Dashboard from "@components/Dashboard";
import { useRegister } from "@graphql/users/custom-hooks";
import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

import UserFields from "./Fields";

const NewLaboratorist = () => {
  const [register, { loading, error }] = useRegister();

  const validationSchema = yup.object().shape({
    cedula: yup
      .string()
      .required("Campo requerido")
      .matches(/^(?<=\s|^)\d+(?=\s|$)/, "Solo números!")
      .min(8, "Minimo de 8 caracteres")
      .max(8, "Superaste el máximo de 8 caracteres"),
    password: yup
      .string()
      .required("Campo requerido")
      .min(5, "Minimo de 5 caracteres")
      .max(30, "Superaste el máximo de 30 caracteres")
      .test(
        "isValidPass",
        "La contraseña debe contener al menos 1 mayúscula, 1 minúscula y 1 número",
        (value, context) => {
          const hasUpperCase = /[A-Z]/.test(value);
          const hasLowerCase = /[a-z]/.test(value);
          const hasNumber = /[0-9]/.test(value);
          let validConditions = 0;
          const numberOfMustBeValidConditions = 3;
          const conditions = [hasLowerCase, hasUpperCase, hasNumber];

          conditions.forEach((condition) => (condition ? validConditions++ : null));
          if (validConditions >= numberOfMustBeValidConditions) {
            return true;
          }

          return false;
        }
      ),
    direccion: yup
      .string()
      .required("Campo requerido")
      .min(8, "Minimo de 8 caracteres")
      .max(50, "Superaste el máximo de 50 caracteres"),
    nombre: yup
      .string()
      .required("Campo requerido")
      .min(8, "Minimo de 8 caracteres")
      .max(50, "Superaste el máximo de 50 caracteres"),
    telefono: yup
      .string()
      .required("Campo requerido")
      .matches(/^(?<=\s|^)\d+(?=\s|$)/, "Solo números!")
      .min(8, "Minimo de 8 caracteres")
      .max(15, "Superaste el máximo de 15 caracteres"),
    fecha_nacimiento: yup.date().required("Campo requerido"),
    course: yup.object().shape({
      course_token: yup.string().required("Campo requerido"),
    }),
  });

  return (
    <Dashboard hasNoActions title="Nuevo Usuario">
      <Formik
        initialValues={{
          cedula: "",
          nombre: "",
          password: "",
          direccion: "",
          foto_usuario: "No escribir aqui (test)",
          telefono: "",
          tipo_usuario: "Laboratorista",
          fecha_nacimiento: "",
          course: {
            course_token: "",
          },
        }}
        validateOnBlur={false}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          return register({
            variables: { data: values },
            update: (cache) => {
              cache.evict({ fieldName: "getLaboratoristsByInstitution" });
              resetForm();
            },
          });
        }}
      >
        {({ dirty }) => (
          <Stack as={Form} spacing={6}>
            <UserFields />
            <Button
              isFullWidth
              disabled={!dirty}
              isLoading={loading}
              loadingText="Registrando Laboratorista..."
              type="submit"
              variant="primary"
            >
              Registrar Laboratorista
            </Button>
          </Stack>
        )}
      </Formik>
    </Dashboard>
  );
};

export default NewLaboratorist;
