import { Button, Icon, Link as ChakraLink, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { Box, Logo } from "@ui";
import { NAV_DATA } from "@utils/constants/landing";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Headroom from "react-headroom";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Nav = () => {
  const [shadow, setShadow] = useState(false);

  const handleScroll = () => {
    window.scrollY >= 80 ? setShadow(true) : setShadow(false);
  };

  window.addEventListener("scroll", handleScroll);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { pathname } = useLocation();

  return (
    <Headroom>
      <Box
        animate={{ y: 0, opacity: 1 }}
        as={motion.header}
        bg="white"
        initial={{ y: "-10vh", opacity: 0 }}
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
          <Logo home="/" />
          {pathname === "/" && (
            <>
              <Stack
                alignItems="center"
                as="ul"
                direction="row"
                display={{ base: "none", md: "flex" }}
                spacing={8}
              >
                {NAV_DATA.options.map((option, index) => (
                  <HashLink key={index} to={option.link}>
                    <Stack alignItems="center" direction="row">
                      <Icon as={option.icon} />
                      <Text color="lendlab.gray.300" fontWeight="700">
                        {option.name}
                      </Text>
                    </Stack>
                  </HashLink>
                ))}
              </Stack>
              <ChakraLink
                as={HashLink}
                display={{ base: "none", md: "inline-flex" }}
                style={{ textDecoration: "none", boxShadow: "none" }}
                to="/login"
              >
                <Button leftIcon={NAV_DATA.button.icon()} variant="primary">
                  {NAV_DATA.button.text}
                </Button>
              </ChakraLink>
            </>
          )}
        </Stack>
      </Box>
    </Headroom>
  );
};
