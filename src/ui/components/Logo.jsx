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
      <Heading
        isLogo
        fontFamily="Basement Grotesque"
        fontSize={{ md: "4xl", base: "2xl" }}
        margin="0"
      >
        ll
      </Heading>
      <Heading isLogo fontFamily="Basement Grotesque" fontSize={{ md: "2xl", base: "xl" }}>
        lendlab
      </Heading>
    </Stack>
  );
};
