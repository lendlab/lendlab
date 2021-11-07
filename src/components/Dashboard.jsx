import { Box, Container, Heading, Stack } from "@chakra-ui/layout";
import { Button, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import ExportButton from "./ExportButton";

const Dashboard = ({ children, hasNoActions, isUserConfig, title, link }) => {
  const isFullWidth = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Box
        borderBottom="1px solid"
        borderBottomColor="lendlab.light.black.300"
        py={{ base: "12", md: "0" }}
      >
        <Container variant="normal">
          <Stack
            alignItems="center"
            direction={{ md: "row", base: "column" }}
            justifyContent={{ md: "space-between", base: "center" }}
            minH="44"
            w="full"
          >
            <Heading>{title}</Heading>
            {!hasNoActions && (
              <Stack
                direction={{ md: "row", base: "column" }}
                spacing="4"
                w={{ base: "full", md: "auto" }}
              >
                <Button isFu as={Link} isFullWidth={isFullWidth} to={link} variant="primary">
                  Nuevo {title}
                </Button>
                <ExportButton isFullWidth={isFullWidth} tabla={title} />
              </Stack>
            )}
            {isUserConfig && <Button colorScheme="red">Borrar mi cuenta</Button>}
          </Stack>
        </Container>
      </Box>
      <Stack bg="lendlab.light.black.200">
        <Container py={8} variant="normal">
          {children}
        </Container>
      </Stack>
    </>
  );
};

export default Dashboard;
