import React, { useState } from "react";
import { Stack, Text, Button, Icon } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { NAV_DATA } from "@utils/constants/landing";
import { motion } from "framer-motion";
import { Logo, Box } from "@ui";

export const Nav = () => {
  const { pathname } = useLocation();
  const [shadow, setShadow] = useState(false);

  const changeShadow = () => {
    window.scrollY >= 80 ? setShadow(true) : setShadow(false);
  };

  window.addEventListener("scroll", changeShadow);

  return (
    <Box
      animate={{ y: 0, opacity: 1 }}
      as={motion.header}
      bg="white"
      initial={{ y: "-10vh", opacity: 0 }}
      position="fixed"
      shadow={shadow ? "sm" : ""}
      style={{ backdropFilter: "blur(20px)", backgroundColor: "rgba(255, 255, 255, 0.25)" }}
      transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      w="100%"
      zIndex="100"
    >
      <Stack
        alignItems="center"
        as="nav"
        direction="row"
        h="nav"
        justifyContent="space-between"
        paddingX={6}
        w="100%"
      >
        <Logo isNotHome={pathname === "/" ? false : true} />
        {pathname === "/" && (
          <>
            <Stack alignItems="center" as="ul" direction="row" spacing={8}>
              {NAV_DATA.options.map((option, index) => (
                <HashLink key={index} to={option.link}>
                  <Stack alignItems="center" direction="row">
                    <Icon as={option.icon} />
                    <Text color="lendlab.gray.300" fontSize={14} fontWeight="700">
                      {option.name}
                    </Text>
                  </Stack>
                </HashLink>
              ))}
            </Stack>
            <Link to="/login">
              <Button leftIcon={NAV_DATA.button.icon()} variant="primary">
                {NAV_DATA.button.text}
              </Button>
            </Link>
          </>
        )}
      </Stack>
    </Box>
  );
};
