import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  StackDivider,
  Stack,
} from "@chakra-ui/react";
import { Prestamo, LoginIcon } from "@icons";
import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "@ui";

const Sections = [
  {
    sectionName: "General",
    linkItems: [
      {
        name: "Resumen",
        icon() {
          return <Prestamo />;
        },
      },
    ],
  },
  {
    sectionName: "Administracion",
    linkItems: [
      {
        name: "Prestamos",
        icon() {
          return <Prestamo />;
        },
      },
      {
        name: "Reservas",
        icon() {
          return <Prestamo />;
        },
      },
      {
        name: "Materiales",
        icon() {
          return <Prestamo />;
        },
      },
      {
        name: "Usuarios",
        icon() {
          return <Prestamo />;
        },
      },
      {
        name: "Salas",
        icon() {
          return <Prestamo />;
        },
      },
    ],
  },
  {
    sectionName: "SOPORTE",
    linkItems: [
      {
        name: "Chat",
        icon() {
          return <Prestamo />;
        },
      },
      {
        name: "Configuración",
        icon() {
          return <Prestamo />;
        },
      },
    ],
  },
];

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
    <Box
      bg="white"
      borderRight="1px"
      borderRightColor="lendlab.gray.200"
      h="full"
      overflowY="auto"
      pos="fixed"
      w={{ base: "full", md: 80 }}
      {...rest}
    >
      <Stack divider={<StackDivider alignSelf="center" color="lendlab.gray.200" w="80%" />}>
        <Flex alignItems="center" h="20" justifyContent="space-between" mx="8">
          <Logo />
          <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
        </Flex>
        {Sections.map((section, index) => (
          <NavItem key={index} linkItems={section.linkItems} name={section.sectionName} />
        ))}
      </Stack>
    </Box>
  );
};

const NavItem = ({ icon, children, name, linkItems, ...rest }) => {
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
        <Link key={index} as={NavLink} style={{ textDecoration: "none", boxShadow: "none" }} to="#">
          <Stack
            _hover={{
              bg: "lendlab.gray.200",
            }}
            align="center"
            borderRadius="14px"
            direction="row"
            mx="4"
            p="4"
            role="group"
            {...rest}
            spacing={4}
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
      bg={useColorModeValue("white", "gray.900")}
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      borderBottomWidth="1px"
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
