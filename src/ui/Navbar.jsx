import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Box, Container, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import { landingData } from "~/app/constants/landing";

import Logo from "./static/Logo";

const Navbar = () => {
  const { pathname } = useLocation();
  const { nav } = landingData;

  return (
    <Box as="header" w="100%">
      <Stack
        alignItems="center"
        as="nav"
        direction="row"
        h="nav"
        justifyContent="space-between"
        paddingX={6}
        w="100%"
      >
        <Logo isNotHome={pathname === "/inicio" ? false : true} />
        {pathname === "/inicio" && (
          <>
            <Stack alignItems="center" as="ul" direction="row" spacing={8}>
              {nav.options.map((option, index) => (
                <Stack key={index} alignItems="center" as="li" direction="row">
                  <Icon as={option.icon} />
                  <Text color="lendlab.gray.300" fontSize={14} fontWeight="700">
                    {option.name}
                  </Text>
                </Stack>
              ))}
            </Stack>
            <Link to="/login">
              <Button leftIcon={nav.button.icon()} variant="primary">
                {nav.button.text}
              </Button>
            </Link>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Navbar;
