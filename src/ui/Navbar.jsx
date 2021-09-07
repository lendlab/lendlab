import {Button} from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import {Container, Stack, Text} from "@chakra-ui/layout";
import React from "react";
import {Link, useLocation} from "react-router-dom";

import {landingData} from "~/app/constants/landing";

import Logo from "./static/Logo";

const Navbar = () => {
  const {pathname} = useLocation();

  return (
    <Container alignSelf="center" maxW="container.xl" overflow="hidden">
      <Stack
        alignItems="center"
        as="header"
        borderBottom="1px"
        borderColor="lendlab.gray.200"
        direction="row"
        justifyContent="space-between"
        minH="10vh"
        w="full"
      >
        <Logo isNotHome={pathname === "/inicio" ? false : true} />
        {pathname === "/inicio" && (
          <>
            <Stack as="ul" direction="row" spacing={6}>
              {landingData.nav.options.map((option, index) => (
                <Stack key={index} as="li" direction="row">
                  <Icon as={option.icon} />
                  <Text color="lendlab.gray.300">{option.name}</Text>
                </Stack>
              ))}
            </Stack>
            <Link to="/login">
              <Button leftIcon={landingData.nav.button.icon()} variant="solid">
                {landingData.nav.button.text}
              </Button>
            </Link>
          </>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
