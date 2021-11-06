import { Container, Stack } from "@chakra-ui/layout";
import React from "react";

import Nav from "../Nav";

const TabsWrapper = ({ children }) => {
  return (
    <Nav>
      <Stack borderBottom="1px solid" borderColor="lendlab.light.black.300">
        <Container display="inherit" overflowX="auto" variant="normal">
          <Stack alignItems="center" direction="row" spacing={12}>
            {children}
          </Stack>
        </Container>
      </Stack>
    </Nav>
  );
};

export default TabsWrapper;
