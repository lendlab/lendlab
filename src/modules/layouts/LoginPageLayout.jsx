import { Container } from "@chakra-ui/layout";
import React from "react";
import { Helmet } from "react-helmet";

export const LoginPageLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>login | lendlab</title>
      </Helmet>
      <Container
        alignSelf="center"
        maxW="container.xl"
        minH="80vh"
        overflow="hidden"
        paddingTop="10vh"
        position="relative"
      >
        {children}
      </Container>
    </>
  );
};
