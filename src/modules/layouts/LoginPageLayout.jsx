import { Container } from "@chakra-ui/layout";
import React from "react";
import { Helmet } from "react-helmet";

export const LoginPageLayout = ({ children }) => {
  return (
    <>
      <Container
        alignSelf="center"
        display="flex"
        maxW="container.xl"
        minH="calc(--app-height - 4.25rem, 100vh - 4.25rem)"
        overflow="hidden"
      >
        {children}
      </Container>
    </>
  );
};
