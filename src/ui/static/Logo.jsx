import { Stack } from "@chakra-ui/layout";
import React from "react";
import { useHistory } from "react-router-dom";

import Heading from "~/ui/text/Heading";

const Logo = ({ isNotHome }) => {
  const history = useHistory();

  const handleRedirectHome = () => {
    history.push("/inicio");
  };

  return (
    <Stack
      alignItems="center"
      cursor={isNotHome && "pointer"}
      direction="row"
      onClick={(e) => isNotHome && handleRedirectHome()}
    >
      <Heading fontSize="4xl" margin="0">
        ll
      </Heading>
      <Heading fontSize="2xl">lendlab</Heading>
    </Stack>
  );
};

export default Logo;
