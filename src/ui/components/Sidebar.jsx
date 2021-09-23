import React from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { Logo } from "@ui";
import { SECTIONS } from "@utils/constants/sidebar";
import { LoginIcon } from "@icons";

export const Sidebar = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SidebarContent display={{ base: "none", md: "block" }} onClose={() => onClose} />
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
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Nav onOpen={onOpen} />
    </>
  );
};

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box bg="white" h="full" overflowY="auto" pos="fixed" w={{ base: "full", md: 60 }} {...rest}>
      <Flex alignItems="center" h="20" justifyContent="space-between" mx="8">
        <Logo />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {SECTIONS.map((section, index) => (
        <NavItem key={index} linkItems={section.linkItems} name={section.sectionName} />
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, name, linkItems, ...rest }) => {
  const { pathname } = useLocation();

  return (
    <>
      <Text
        color="lendlab.gray.300"
        fontSize="10px"
        fontWeight="700"
        mx="4"
        p="4"
        textTransform="uppercase"
      >
        {name}
      </Text>
      {linkItems.map((item, index) => (
        <Link
          key={index}
          as={NavLink}
          style={{ textDecoration: "none", boxShadow: "none" }}
          to={item.path}
        >
          <Stack
            align="center"
            bg={pathname == item.path ? "lendlab.gray.100" : ""}
            borderRadius="14px"
            direction="row"
            mx="4"
            p="4"
            role="group"
            spacing={4}
            {...rest}
          >
            {item.icon && <Icon as={item.icon} />}
            <Text color="lendlab.black.100" fontSize="14px">
              {item.name}
            </Text>
          </Stack>
        </Link>
      ))}
    </>
  );
};

const Nav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      alignItems="center"
      bg="white"
      height="20"
      justifyContent="flex-start"
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      {...rest}
    >
      <IconButton
        aria-label="open menu"
        display={{ base: "block", md: "none" }}
        icon={<LoginIcon />}
        variant="outline"
        onClick={onOpen}
      />

      <Logo display={{ base: "flex", md: "none" }} />
    </Flex>
  );
};
