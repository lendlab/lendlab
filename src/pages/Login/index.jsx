import { FormControl } from "@chakra-ui/form-control";
import { Container, Heading, Stack } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import React, { useCallback, useState } from "react";
import { Field } from "@components/Field";
import { Button } from "@chakra-ui/button";
import { BsCreditCard2Front } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";

const Login = () => {
  const [show, setShow] = useState(false);

  const handleShow = useCallback(() => {
    setShow(!show);
  }, [show]);

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
        >
          {({ isSubmitting, dirty }) => (
            <Stack as={Form} spacing="6">
              <Field
                icon={BsCreditCard2Front}
                label="Tu cedula"
                name="cedula"
                placeholder="ej. 54548246"
                type="text"
              />
              <Field
                isPassword
                handleShow={handleShow}
                icon={AiOutlineLock}
                label="Tu contraseña"
                name="contraseña"
                placeholder="ej. ******"
                show={show}
                type={show ? "text" : "password"}
              />
              <Button disabled={!dirty} type="submit" variant="primary">
                Iniciar sesión
              </Button>
            </Stack>
          )}
        </Formik>
      </Stack>
    </Container>
  );
};

export default Login;
