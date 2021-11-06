import { Icon as ChakraIcon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import TabsWrapper from "./TabsWrapper";

const DashboardTabs = ({ routes }) => {
  const { pathname } = useLocation();

  const includesPath = (path) => {
    return pathname.includes(path);
  };

  return (
    <TabsWrapper>
      {routes.map(({ icon: Icon, title, path }, i) => {
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
            <Text color={isActive ? "lendlab.blue.300" : "lendlab.light.black.500"}>{title}</Text>
          </Stack>
        );
      })}
    </TabsWrapper>
  );
};

export default DashboardTabs;
