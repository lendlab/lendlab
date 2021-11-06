import { Box, Container, Heading, Stack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import ExportButton from "./ExportButton";

const Dashboard = ({ children, hasNoActions, title, link }) => {
  return (
    <>
      <Box borderBottom="1px solid" borderBottomColor="lendlab.light.black.300">
        <Container variant="normal">
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            minH="44"
            w="full"
          >
            <Heading>{title}</Heading>
            {!hasNoActions && (
              <Stack direction="row" spacing="4">
                <Button as={Link} to={link} variant="primary">
                  Nuevo {title}
                </Button>
                <ExportButton tabla={title} />
              </Stack>
            )}
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
