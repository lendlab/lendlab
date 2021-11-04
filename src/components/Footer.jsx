import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("lendlab.light.black.200", "lendlab.dark.black.200")}
      borderColor={useColorModeValue("lendlab.light.black.300", "lendlab.dark.black.300")}
      borderWidth="1px 0 1px 0"
    >
      <Container as={Stack} justifyContent="center" maxW={"5xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} justifyItems={{ md: "center" }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Servicio</ListHeader>
            <Link href={"#"}>Inicio</Link>
            <Stack align={"center"} direction={"row"} spacing={2}>
              <Link href={"#"}>Características</Link>
            </Stack>
            <Link href={"#"}>Administración</Link>
            <Link href={"#"}>Beneficios</Link>
            <Link href={"#"}>Lanzamientos</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Empresa</ListHeader>
            <Link href={"#"}>Sobre nosotros</Link>
            <Link href={"#"}>Nuestro Equipo</Link>
            <Link href={"#"}>Ponte en contacto</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Link href={"#"}>Politica de Cookies</Link>
            <Link href={"#"}>Politica de Privacidad</Link>
            <Link href={"#"}>Terminos de Servicio</Link>
            <Link href={"#"}>Estadi</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Siguenos</ListHeader>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>Dribbble</Link>
            <Link href={"#"}>Instagram</Link>
            <Link href={"#"}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("lendlab.light.black.300", "lendlab.dark.black.300"),
            flexGrow: 1,
            ml: 8,
          }}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("lendlab.light.black.300", "lendlab.dark.black.300"),
            flexGrow: 1,
            mr: 8,
          }}
          align={"center"}
        >
          <Heading>Lendlab</Heading>
        </Flex>
        <Text fontSize={"sm"} pt={6} textAlign={"center"}>
          © 2020 LendLab. Todos los derechos reservados.
        </Text>
      </Box>
    </Box>
  );
}
