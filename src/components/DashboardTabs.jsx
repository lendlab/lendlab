import { Container, Icon as ChakraIcon, Stack, Text } from "@chakra-ui/react";
import { ROUTES } from "@utils/constants/routes";
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import Nav from "./Nav";

const DashboardTabs = () => {
  const { pathname } = useLocation();

  const includesPath = (path) => {
    return pathname.includes(path);
  };

  return (
    <Nav>
      <Stack borderBottom="1px solid" borderColor="lendlab.light.black.300">
        <Container display="inherit" overflowX="auto" variant="normal">
          <Stack alignItems="center" direction="row" spacing={12}>
            {ROUTES.map(({ icon: Icon, title, path }, i) => {
              const isActive = includesPath(path);

              return (
                <Stack
                  key={i}
                  alignItems="center"
                  as={Link}
                  borderBottom={isActive && "2px solid"}
                  borderColor={isActive && "lendlab.blue.300"}
                  color={isActive ? "lendlab.blue.300" : "lendlab.light.black.500"}
                  cursor="pointer"
                  direction="row"
                  py={4}
                  to={path}
                >
                  <ChakraIcon as={Icon} />
                  <Text color={isActive ? "lendlab.blue.300" : "lendlab.light.black.500"}>
                    {title}
                  </Text>
                </Stack>
              );
            })}
          </Stack>
        </Container>
      </Stack>
    </Nav>
  );
};

export default DashboardTabs;
