import { Button } from "@chakra-ui/button";
import { Container, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";

const Nav = ({ children }) => {
  return (
    <>
      <Container variant="normal">
        <Stack
          alignItems="center"
          as="nav"
          direction="row"
          h="36px"
          justifyContent="space-between"
          py="8"
          zIndex="100"
        >
          <Heading>LendLab</Heading>
          <Stack alignItems="center" direction="row" spacing="8">
            <Text display={{ md: "inline-block", base: "none" }}>Características</Text>
            <Text display={{ md: "inline-block", base: "none" }}>Sobre nosotros</Text>
            <Button variant="primary"> Iniciar sesión </Button>
          </Stack>
        </Stack>
      </Container>
      {children}
    </>
  );
};

export default Nav;
