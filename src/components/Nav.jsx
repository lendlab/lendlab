import { Button } from "@chakra-ui/button";
import { Container, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { useMe } from "@graphql/auth/custom-hook";
import { Avatar } from "@chakra-ui/avatar";
import { Link } from "react-router-dom";

import UserMenu from "./UserMenu";

const Nav = ({ children }) => {
  const { loading, data, error } = useMe();

  let options = null;

  {
    /* <Avatar alt={data?.me.nombre} name={data?.me.nombre} size="md" /> */
  }
  if (loading) {
  } else if (data?.me) {
    options = <UserMenu name={data?.me.nombre} />;
  } else {
    options = (
      <>
        <Text display={{ md: "inline-block", base: "none" }}>Características</Text>
        <Text display={{ md: "inline-block", base: "none" }}>Sobre nosotros</Text>
        <Link to="/login">
          <Button variant="primary"> Iniciar sesión </Button>
        </Link>
      </>
    );
  }

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
            {options}
          </Stack>
        </Stack>
      </Container>
      {children}
    </>
  );
};

export default Nav;
