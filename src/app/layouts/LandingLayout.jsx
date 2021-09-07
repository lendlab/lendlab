import {Container} from "@chakra-ui/layout";
import React from "react";
import {Helmet} from "react-helmet";

const LandingLayout = ({children}) => {
  return (
    <>
      <Helmet>
        <title>lendlab | inicio</title>
      </Helmet>
      <Container alignSelf="center" maxW="container.xl" overflow="hidden">
        {children}
      </Container>
    </>
  );
};

export default LandingLayout;
