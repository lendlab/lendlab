import { Link, Stack } from "@chakra-ui/layout";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { LoginLayout } from "@components/layout";
import { Heading, Text } from "@components/texts";

import LoginForm from "./components/LoginForm";

export const Login = () => {
  return (
    <LoginLayout>
      <Stack justifyContent="center" minH="90vh" spacing={12}>
        <Stack>
          <Heading fontSize="4xl">Inicia sesión en tu cuenta</Heading>
          <Text fontSize="18px">
            Inicia sesión y accede a todas las funciones que te ofrece lendlab. Es bueno volverte a
            ver.
          </Text>
        </Stack>

        <Stack alignItems="center" spacing={4}>
          <LoginForm />
        </Stack>
        <Stack alignItems="center" spacing={1}>
          <Text fontSize="13px">¿No tienes cuenta todavía?</Text>
          <Link as={RouterLink} color="lendlab.blue" fontSize="13px" to="/inicio">
            Crear una cuenta ahora
          </Link>
        </Stack>
        <Stack bottom="5" position="absolute" w="full">
          <Text fontSize="10px">
            Continuando, accedes y aceptas las politicas de servicio de LendLab
          </Text>
        </Stack>
      </Stack>
    </LoginLayout>
  );
};
