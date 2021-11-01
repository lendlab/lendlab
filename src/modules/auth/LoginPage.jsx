import React from "react";
import { Link, Stack } from "@chakra-ui/layout";
import { Link as RouterLink } from "react-router-dom";
import { LoginPageLayout } from "@modules/layouts/LoginPageLayout";
import { Heading, Text } from "@ui";

import { LoginPageForm } from "./LoginPageForm";

export const LoginPage = () => {
  return (
    <LoginPageLayout>
      <Stack h="inherit" justifyContent="center" spacing={12} w="full">
        <Stack>
          <Heading isLogo fontSize={{ md: "4xl", base: "3xl" }}>
            Inicia sesión en tu cuenta
          </Heading>
          <Text>
            Inicia sesión y accede a todas las funciones que te ofrece lendlab. Es bueno volverte a
            ver.
          </Text>
        </Stack>

        <Stack alignItems="center" spacing={4}>
          <LoginPageForm />
        </Stack>
        <Stack alignItems="center" spacing={1}>
          <Text fontSize="13px">¿No tienes cuenta todavía?</Text>
          <Link as={RouterLink} color="lendlab.blue" fontSize="13px" to="/inicio">
            Crear una cuenta ahora
          </Link>
        </Stack>
      </Stack>
    </LoginPageLayout>
  );
};
