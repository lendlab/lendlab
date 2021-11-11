import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import Dashboard from "@components/Dashboard";
import { Field } from "@components/Field";
import {useToast} from "@chakra-ui/react"
import { useRegister } from "@graphql/users/custom-hooks";
import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { toErrorMap } from "@utils/toErrorMap";

import UserFields from "./Fields";

const NewUser = () => {
  const [register, { loading, error }] = useRegister();
  const toast = useToast();


  const validationSchema = yup.object().shape({
    cedula: yup
      .string()
      .required("Campo requerido")
      .matches(/^(?<=\s|^)\d+(?=\s|$)/, "Solo números!")
      .min(5, "Minimo de 5 caracteres")
      .max(8, "Superaste el máximo de 8 caracteres"),
    password: yup
      .string()
      .required("Campo requerido")
      .min(8, "Minimo de 8 caracteres")
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
      .max(9, "Superaste el máximo de 9 caracteres"),
    fecha_nacimiento: yup.date().required("Campo requerido"),
      course_token: yup.string().required("Campo requerido"),
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
          tipo_usuario: "Alumno",
          fecha_nacimiento: "",
          course_token: "",
        }}
        validateOnBlur={false}
        validationSchema={validationSchema}
        onSubmit={async(values, { resetForm, setErrors }) => {
          const response = await register({
            variables: { data: {cedula: values.cedula,
              nombre: values.nombre,
              password: values.password,
              tipo_usuario: "Alumno",
              direccion: values.direccion,
              telefono: values.telefono,
              foto_usuario: values.foto_usuario,
              fecha_nacimiento: values.fecha_nacimiento,
              course: {
                course_token: values.course_token
              }} },
            update: (cache) => {
              cache.evict({ fieldName: "getStudentsByInstitution" });
            },
          });
          if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors));
          }
          else {
            resetForm();
            toast({
              title: "Alumno creado con éxito",
              description: "Se ha creado el alumno con éxito",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
          }
        }}
      >
        {({ dirty }) => (
          <Stack as={Form} spacing={6}>
            <UserFields />
            <Button
              isFullWidth
              disabled={!dirty}
              isLoading={loading}
              loadingText="Registrando Usuario..."
              type="submit"
              variant="primary"
            >
              Registrar Usuario
            </Button>
          </Stack>
        )}
      </Formik>
    </Dashboard>
  );
};

export default NewUser;
