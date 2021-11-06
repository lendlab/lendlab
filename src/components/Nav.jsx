import { Button } from "@chakra-ui/button";
import { Container, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { useMe } from "@graphql/auth/custom-hook";
import { Avatar } from "@chakra-ui/avatar";
import { Link } from "react-router-dom";
import { Input } from "@chakra-ui/input";
import { Form, Formik } from "formik";
import { FiSearch } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import UserMenu from "./UserMenu";
import { Field } from "./Field";

const Nav = ({ children, studentNav }) => {
  const { loading, data, error } = useMe();

  const history = useHistory();

  let options = null;
  let isStudent = false;

  if (loading) {
  } else if (data?.me) {
    options = <UserMenu name={data?.me.nombre} />;
    if (data?.me.tipo_usuario == "Alumno") {
      isStudent = true;
    }
  } else {
    options = (
      <>
        <Text display={{ md: "inline-block", base: "none" }}>Características</Text>
        <Text display={{ md: "inline-block", base: "none" }}>Sobre nosotros</Text>
        <Link to="/login">
          <Button variant="primary"> Iniciar sesión </Button>
        </Link>
      </>
    );
  }

  return (
    <Stack>
      <Container variant="normal">
        <Stack
          alignItems={isStudent ? { md: "center", base: "start" } : "center"}
          as="nav"
          direction={isStudent && { md: "row", base: "column" }}
          height={isStudent ? { md: "36px", base: "auto" } : "36px"}
          justifyContent="space-between"
          minH="36px"
          py="8"
          spacing={{ md: "8", base: "2" }}
          zIndex="100"
        >
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            w={{ md: "auto", base: "full" }}
          >
            <Heading>LendLab</Heading>
            {isStudent && (
              <Stack
                alignItems="center"
                direction="row"
                display={{ md: "none", base: "flex" }}
                spacing="8"
              >
                {options}
              </Stack>
            )}
          </Stack>
          {isStudent && (
            <Formik
              initialValues={{ material: "" }}
              validateOnChange={false}
              onSubmit={() => {
                history.push(`/app/busqueda/${material}`);
              }}
            >
              {() => (
                <Stack as={Form} spacing="0" w="full">
                  <Field
                    isFullWidth
                    icon={FiSearch}
                    name="material"
                    placeholder="Buscar material..."
                  />
                </Stack>
              )}
            </Formik>
          )}
          <Stack
            alignItems="center"
            direction="row"
            display={isStudent && { md: "flex", base: "none" }}
            spacing="8"
          >
            {options}
          </Stack>
        </Stack>
      </Container>
      {children}
    </Stack>
  );
};

export default Nav;
