import { Button } from "@chakra-ui/button";
import { Container, Heading, Stack, Text } from "@chakra-ui/layout";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Field } from "@components/Field";
import { useRegister } from "@graphql/users/custom-hooks";
import { Form, Formik } from "formik";
import React from "react";
import { AiOutlineLock } from "react-icons/ai";
import { BsCreditCard2Front } from "react-icons/bs";
import { ME } from "@graphql/auth/graphql-queries";
import { toErrorMap } from "@utils/toErrorMap";
import * as yup from "yup";
import { Link } from "react-router-dom";

const Register = () => {
  const [register, { loading: loadingRegister }] = useRegister();

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
    <Container centerContent h="full" maxW="container.md" minH="100vh" py={{ md: "0", base: "6" }}>
      <Stack h="full" justifyContent="center" minH="100vh" spacing="6" w="full">
        <Heading fontSize="8" textAlign="center">
          Crea una cuenta
        </Heading>
        <Formik
          initialValues={{
            cedula: "",
            nombre: "",
            password: "",
            tipo_usuario: "Alumno",
            direccion: "",
            telefono: "",
            foto_usuario: "",
            fecha_nacimiento: "",
            course_token: "",
          }}
          validateOnBlur={false}
          validateOnChange={true}
          validationSchema={validationSchema}
          onSubmit={async (values, { setErrors }) => {
            const response = await register({
              variables: {
                data: {
                cedula: values.cedula,
                nombre: values.nombre,
                password: values.password,
                tipo_usuario: "Alumno",
                direccion: values.direccion,
                telefono: values.telefono,
                foto_usuario: values.foto_usuario,
                fecha_nacimiento: values.fecha_nacimiento,
                course: {
                  course_token: values.course_token
                }},
              },
              update: (cache, { data }) => {
                cache.writeQuery({
                  query: ME,
                  data: {
                    __typename: "Query",
                    me: data?.register?.user,
                  },
                });
              },
            });

            if (response.data?.register.errors) {
              setErrors(toErrorMap(response.data.register.errors));
            }
          }}
        >
          {({ dirty }) => (
            <Stack as={Form} spacing="6">
              <Stack direction={{ md: "row", base: "column" }}>
                <Field
                  icon={BsCreditCard2Front}
                  label="Tu cedula"
                  name="cedula"
                  placeholder="ej. 54548246"
                  type="number"
                />
                <Field label="Tu Nombre" name="nombre" placeholder="ej. Marcos Cianzio" />
                <Field
                  icon={AiOutlineLock}
                  label="Tu contraseña"
                  name="password"
                  placeholder="ej. ******"
                  type="password"
                />
              </Stack>
              <Stack direction={{ md: "row", base: "column" }}>
                <Field
                  label="Tu dirección"
                  name="direccion"
                  placeholder="ej. Haedo 450"
                  type="text"
                />
                <Field
                  label="Tu número de teléfono"
                  name="telefono"
                  placeholder="ej. 099 593 094"
                  type="number"
                />
              </Stack>
              <Stack direction={{ md: "row", base: "column" }}>
                <Field label="Fecha de Nacimiento" name="fecha_nacimiento" type="date" />
                <Field
                  label="Código de curso"
                  name="course_token"
                  placeholder="ej. qAyu20ñp"
                />
              </Stack>

              <Button
                isLoading={loadingRegister}
                loadingText="Creando cuenta..."
                type="submit"
                variant="primary"
                disabled={!dirty}
              >
                Crear cuenta
              </Button>
            </Stack>
          )}
        </Formik>
        <Stack>
          <Text textAlign="center">¿Ya tienes cuenta?</Text>
          <ChakraLink as={Link} margin="0" spacing="0" textAlign="center" to="/login">
            ¡Incia sesión ahora!
          </ChakraLink>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Register;
