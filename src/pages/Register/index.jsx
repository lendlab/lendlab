import { Button } from "@chakra-ui/button";
import { Container, Heading, Stack } from "@chakra-ui/layout";
import { Field } from "@components/Field";
import { useRegister } from "@graphql/users/custom-hooks";
import { Form, Formik } from "formik";
import React from "react";
import { AiOutlineLock } from "react-icons/ai";
import { BsCreditCard2Front } from "react-icons/bs";
import { ME } from "@graphql/auth/graphql-queries";
import { toErrorMap } from "@utils/toErrorMap";
const Register = () => {
  const [register, { loading: loadingRegister }] = useRegister();

  return (
    <Container centerContent h="full" maxW="container.md" minH="100vh" py={{ md: "0", base: "4" }}>
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
            course: {
              course_token: "",
            },
          }}
          validateOnChange={false}
          onSubmit={async (values, { setErrors }) => {
            const response = await register({
              variables: {
                data: values,
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
              />
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
              <Field label="Fecha de Nacimiento" name="fecha_nacimiento" type="date" />
              <Field
                label="Código de curso"
                name="course.course_token"
                placeholder="ej. qAyu20ñp"
              />
              <Button
                isLoading={loadingRegister}
                loadingText="Creando cuenta..."
                type="submit"
                variant="primary"
                çdisabled={!dirty}
              >
                Crear cuenta
              </Button>
            </Stack>
          )}
        </Formik>
      </Stack>
    </Container>
  );
};

export default Register;
