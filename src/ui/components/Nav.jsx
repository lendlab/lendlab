import React, { useState } from "react";
import {
  Stack,
  Text,
  Button,
  Icon,
  Flex,
  CloseButton,
  DrawerContent,
  Drawer,
  useDisclosure,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { NAV_DATA } from "@utils/constants/landing";
import { motion } from "framer-motion";
import { Logo, Box } from "@ui";
import Headroom from "react-headroom";

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
          justifyContent={{ md: "space-between", base: "start" }}
          paddingX={6}
          w="100%"
        >
          <Button
            aria-label="open menu"
            display={{ base: "block", md: "none" }}
            variant="outline"
            onClick={onOpen}
          />
          <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement="left"
            returnFocusOnClose={false}
            size="full"
            onClose={onClose}
            onOverlayClick={onClose}
          >
            <DrawerContent>
              <ResponsiveNavContent isOpen={isOpen} onClose={onClose} />
            </DrawerContent>
          </Drawer>
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
              <Link to="/login">
                <Button
                  display={{ base: "none", md: "inline-flex" }}
                  leftIcon={NAV_DATA.button.icon()}
                  variant="primary"
                >
                  {NAV_DATA.button.text}
                </Button>
              </Link>
            </>
          )}
        </Stack>
      </Box>
    </Headroom>
  );
};

const ResponsiveNavContent = ({ isOpen, onClose, ...rest }) => {
  return (
    <Stack bg="white" h="full" justifyContent="space-between" overflowY="auto" w="full" {...rest}>
      <Stack>
        <Flex alignItems="center" h="20" justifyContent="space-between" mx="8">
          <Logo />
          <CloseButton onClick={onClose} />
        </Flex>
        {NAV_DATA.options.map((option, index) => (
          <NavItem
            key={index}
            icon={option.icon}
            index={index}
            link={option.link}
            name={option.name}
            onClose={onClose}
          />
        ))}
      </Stack>

      <Box bottom="0" display={isOpen ? "block" : "none"} w="full">
        <Button isFullWidth borderRadius={0} leftIcon={NAV_DATA.button.icon()} variant="primary">
          {NAV_DATA.button.text}
        </Button>
      </Box>
    </Stack>
  );
};

const NavItem = ({ onClose, icon, index, name, link, ...rest }) => {
  return (
    <>
      <ChakraLink
        key={index}
        as={HashLink}
        style={{ textDecoration: "none", boxShadow: "none" }}
        to={link}
        onClick={onClose}
      >
        <Stack
          align="center"
          borderRadius="14px"
          direction="row"
          mx="4"
          p="4"
          role="group"
          spacing={4}
          {...rest}
        >
          <Icon as={icon} />

          <Text color="lendlab.gray.300" fontWeight="700">
            {name}
          </Text>
        </Stack>
      </ChakraLink>
    </>
  );
};
