import { Container } from "@chakra-ui/layout";
import React from "react";
import { Helmet } from "react-helmet";

export const LoginLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>lendlab | login</title>
      </Helmet>
      <Container
        alignSelf="center"
        maxW="container.xl"
        minH="90vh"
        overflow="hidden"
        paddingTop="10vh"
        position="relative"
      >
        {children}
      </Container>
    </>
  );
};
