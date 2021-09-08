import { Stack } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import * as Yup from "yup";

import LoginLayout from "~/app/layouts/LoginLayout";
import FormControl from "~/ui/forms/FormControl";
import Heading from "~/ui/text/Heading";
import Text from "~/ui/text/Text";

const Login = () => {
  const validationSchema = Yup.object().shape({
    cedula: Yup.string()
      .matches(/^[0-9]+$/, "Solo números")
      .max(9, "No hay cedula de 10 cifras")
      .required("Se requiere"),
    password: Yup.string().min(2, "Muy corto").max(45, "Muy larga").required("Se requiere"),
  });

  return (
    <LoginLayout>
      <Stack direction="row" minH="90vh" spacing={0}>
        <Stack flex="1" justifyContent="center">
          <Heading fontSize="6xl">Inicia sesión en tu cuenta</Heading>
          <Text>Accede a la aplicación de LendLab ingresando tus datos</Text>
          <Formik
            initialValues={{
              cedula: "",
              password: "",
            }}
            validationSchema={validationSchema}
          >
            {(formik) => (
              <Form>
                <FormControl
                  label="Cedula"
                  name="cedula"
                  placeholder="ej. 54548246"
                  type="text"
                  w="80%"
                />
                <FormControl
                  label="Contraseña"
                  name="password"
                  placeholder="ej. ********"
                  type="password"
                  w="80%"
                />
              </Form>
            )}
          </Formik>
          <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" />
        </Stack>
        <Stack bg="green.100" flex="1" />
      </Stack>
    </LoginLayout>
  );
};

export default Login;
