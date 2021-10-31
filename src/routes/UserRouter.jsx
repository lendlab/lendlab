import { useMutation, useQuery } from "@apollo/client";
import {
  Avatar,
  Box,
  Button,
  Circle,
  Container,
  Divider,
  Icon,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { Cart, Notification, Search, LogoutIcon } from "@icons";
import { SearchPage } from "@modules/user/Search";
import HomePage from "@pages/user/home";
import { FormControl, Logo, Text } from "@ui";
import { Form, Formik } from "formik";
import React from "react";
import { Route, Switch, useHistory, useLocation } from "react-router";
import { LOGOUT } from "@graphql/mutations/auth";
import { useCart } from "@hooks/useCart";
import { CartDrawer } from "@modules/user/CartDrawer";
import { ME } from "@graphql/mutations/auth";

export const UserRouter = (props) => {
  const { openCart, cartCount, clearCart } = useCart();

  const [logout] = useMutation(LOGOUT);
  const { data } = useQuery(ME);

  const history = useHistory();
  const path = useLocation;

  localStorage.setItem("lastPath", props.location.pathname);

  return (
    <Container alignSelf="center" maxW="container.xl" position="relative">
      <Box alignSelf="center" maxW="container.xl" paddingTop={4} position="relative">
        <Stack>
          <Stack alignItems="center" direction="row" justifyContent="space-between">
            <Logo home="/app/home" />
            <Stack flex="1" maxW={800}>
              <Formik
                initialValues={{
                  material: "",
                }}
                onSubmit={(values) => {
                  history.push(`/app/search/${values.material}`);
                }}
              >
                {(props) => (
                  <Form>
                    <FormControl
                      isLabelLeft
                      control="input"
                      name="material"
                      placeholder="Buscar material..."
                      type="text"
                    >
                      <InputLeftElement children={<Search />} pointerEvents="none" />
                    </FormControl>
                  </Form>
                )}
              </Formik>
            </Stack>

            <Stack alignItems="center" direction="row" spacing={8}>
              <Notification />
              <Stack direction="row" position="relative">
                <Icon as={Cart} cursor="pointer" h="none" w="none" onClick={openCart} />
                {cartCount > 0 && (
                  <Circle bg="lendlab.blue" h={4} position="absolute" right="-3" top="-1" w={4}>
                    <Text color="white" fontSize="1">
                      {cartCount}
                    </Text>
                  </Circle>
                )}
              </Stack>

              <Menu isLazy>
                <MenuButton as={Avatar} cursor="pointer" name={data?.me?.nombre} size="sm" />
                <MenuList>
                  <MenuItem
                    icon={<LogoutIcon fill="#000" />}
                    onClick={() => {
                      logout({
                        update: (cache) => {
                          cache.evict({ fieldName: "me" });
                          localStorage.removeItem("cart");
                          localStorage.removeItem("lastPath");
                        },
                      });
                    }}
                  >
                    Cerrar Sesión
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Stack>
          <Stack alignItems="center" direction="row" spacing={8}>
            <Stack
              bg="lendlab.gray.100"
              borderBottomColor="black"
              borderBottomWidth={1}
              borderTopRadius="14px"
              px={8}
              py={3}
            >
              <Text color="black" fontSize="2" fontWeight="bold">
                Inicio
              </Text>
            </Stack>
            <Menu>
              <MenuButton
                _focus={{ boxShadow: "none" }}
                as={Button}
                boxShadow="none"
                color="black"
                fontSize="2"
                fontWeight="regular"
                variant="unstyled"
              >
                Categorias
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>

            <Text color="black" fontSize="2">
              Salas
            </Text>
          </Stack>
        </Stack>
      </Box>
      <Divider />
      <CartDrawer />
      <Switch>
        <Route component={HomePage} path="/app/home" />
        <Route component={SearchPage} path="/app/search/:material" />
      </Switch>
    </Container>
  );
};
