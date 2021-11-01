import { Container } from "@chakra-ui/layout";
import React from "react";
import { Helmet } from "react-helmet";

export const LoginPageLayout = ({ children }) => {
  return (
    <>
      <Container
        alignSelf="center"
        display="flex"
        minH="calc(100vh - 4.25rem)"
        minW="container.xl"
        overflow="hidden"
      >
        {children}
      </Container>
    </>
  );
};
