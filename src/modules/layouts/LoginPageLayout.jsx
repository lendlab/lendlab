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
        minH="calc(100vh - 4.25rem)"
        overflow="hidden"
      >
        {children}
      </Container>
    </>
  );
};
