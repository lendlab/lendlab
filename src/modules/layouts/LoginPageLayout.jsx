import { Container } from "@chakra-ui/layout";
import React from "react";
import { Helmet } from "react-helmet";

export const LoginPageLayout = ({ children }) => {
  return (
    <>
      <Container
        H="calc(100vh - 4.25rem)"
        W="container.xl"
        alignSelf="center"
        display="flex"
        overflow="hidden"
      >
        {children}
      </Container>
    </>
  );
};
