import { Button } from "@chakra-ui/button";
import { Container, Heading, Link as ChakraLink, Stack, Text } from "@chakra-ui/layout";
import { Field } from "@components/Field";
import { useLogin } from "@graphql/auth/custom-hook";
import { toErrorMap } from "@utils/toErrorMap";
import { Form, Formik } from "formik";
import React, { useCallback, useState } from "react";
import { AiOutlineLock } from "react-icons/ai";
import { BsCreditCard2Front } from "react-icons/bs";
import { Link } from "react-router-dom";
import * as yup from "yup";

const Login = () => {
  const [show, setShow] = useState(false);

  const validationSchema = yup.object().shape({
    cedula: yup.string().required("Campo requerido"),
    password: yup.string().required("Campo requerido"),
  });

  const handleShow = useCallback(() => {
    setShow(!show);
  }, [show]);

  const [login, { loading }] = useLogin();

  return (
    <Container centerContent maxW="container.md" minH="100vh">
      <Stack h="full" justifyContent="center" minH="100vh" spacing="6" w="full">
        <Heading fontSize="8" textAlign="center">
          Inicia sesión en tu cuenta
        </Heading>
        <Formik
          initialValues={{
            cedula: "",
            password: "",
          }}
          validateOnChange={false}
          validationSchema={validationSchema}
          onSubmit={async (values, { setErrors }) => {
            const response = await login({
              variables: {
                options: values,
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
          {({ dirty }) => (
            <Stack as={Form} spacing="6">
              <Field
                icon={BsCreditCard2Front}
                label="Tu cedula"
                name="cedula"
                placeholder="ej. 54548246"
                type="number"
              />
              <Field
                isPassword
                handleShow={handleShow}
                icon={AiOutlineLock}
                label="Tu contraseña"
                name="password"
                placeholder="ej. ******"
                show={show}
                type={show ? "text" : "password"}
              />
              <Button
                disabled={!dirty}
                isLoading={loading}
                loadingText="Iniciando sesión..."
                type="submit"
                variant="primary"
              >
                Iniciar sesión
              </Button>
            </Stack>
          )}
        </Formik>
        <Stack>
          <Text textAlign="center">¿No tienes cuenta?</Text>
          <ChakraLink as={Link} margin="0" spacing="0" textAlign="center" to="/registro">
            ¡Crear una ahora!
          </ChakraLink>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Login;
