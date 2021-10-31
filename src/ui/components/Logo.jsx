import React from "react";
import { Stack } from "@chakra-ui/layout";
import { useHistory, useLocation } from "react-router-dom";
import { Heading } from "@ui";

export const Logo = ({ isNotHome, home, ...props }) => {
  const history = useHistory();

  const handleRedirectHome = () => {
    history.push(home);
  };

  const { pathname } = useLocation();

  return (
    <Stack
      alignItems="center"
      cursor={pathname != home && "pointer"}
      direction="row"
      onClick={(e) => pathname != home && handleRedirectHome()}
      {...props}
    >
      <Heading fontFamily="Basement Grotesque" fontSize="4xl" margin="0">
        ll
      </Heading>
      <Heading fontFamily="Basement Grotesque" fontSize="2xl">
        lendlab
      </Heading>
    </Stack>
  );
};
