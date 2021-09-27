import {
  Badge,
  Container,
  Stack,
  Avatar,
  Divider,
  Box,
  Center,
  Image,
  Button,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { Logo, Input, Text, Heading, Drawer, WhiteCircle, CartItem } from "@ui";
import { Cart, Notification, Search, BriefCase, Arrow, Trash } from "@icons";
import { useDisclosure } from "@chakra-ui/hooks";
import { materials } from "@utils/constants/materials";

import { useCart } from "../../hooks/useCart";

export const HomePage = () => {
  const colorSchemes = {
    Buen: "green",
    Mal: "red",
    Regular: "yellow",
  };

  const { cart, addMaterialToCart, deleteMaterialFromCart, cartCount } = useCart();

  const [data, setData] = React.useState({});

  const {
    isOpen: isMaterialOpen,
    onOpen: onMaterialOpen,
    onClose: onMaterialClose,
  } = useDisclosure();
  const { isOpen: isCartOpen, onOpen: onCartOpen, onClose: onCartClose } = useDisclosure();

  const btnRef = React.useRef();

  const handleAddMaterialToCart = (material) => {
    addMaterialToCart(material);
    onMaterialClose();
  };

  return (
    <>
      <Container alignSelf="center" maxW="container.xl" overflow="hidden" position="relative">
        <Box paddingTop={4}>
          <Stack>
            <Stack alignItems="center" direction="row" justifyContent="space-between">
              <Logo />
              <Input maxW={800} placeholder="Buscar Material">
                <InputLeftElement children={<Search />} pointerEvents="none" />
              </Input>

              <Stack alignItems="center" direction="row" spacing={8}>
                <Notification />
                <Icon as={Cart} cursor="pointer" h="none" w="none" onClick={onCartOpen} />
                <Avatar name="Kent Dodds" size="sm" src="https://bit.ly/kent-c-dodds" />
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
                <Text color="black" fontSize="2">
                  Inicio
                </Text>
              </Stack>
              <Text color="black" fontSize="2">
                Categorias
              </Text>
              <Text color="black" fontSize="2">
                Salas
              </Text>
            </Stack>
          </Stack>
          <Divider />

          <Box mt={8}>
            <Stack alignItems="center" direction="row" justifyContent="space-between">
              <Stack alignItems="center" direction="row">
                <BriefCase />
                <Heading fontSize="7" textAlign="left">
                  {" "}
                  Materiales Populares{" "}
                </Heading>
              </Stack>
              <Text color="lendlab.blue" fontSize="2">
                Ver todos
              </Text>
            </Stack>

            <Center h={8}>
              <Divider />
            </Center>
            <Stack alignItems="center" direction="row" justifyContent="space-between" paddingY={4}>
              {materials.slice(0, 3).map(({ src, nombre, desc, ...rest }, index) => (
                <Stack key={index} alignItems="center" spacing={4}>
                  <Image
                    boxSize="200px"
                    fallbackSrc="/images/fallback.jpg"
                    objectFit="cover"
                    src={src}
                  />
                  <Text color="black" fontSize="2" fontWeight="bold">
                    {nombre}
                  </Text>
                  <Text fontSize="2">{desc}</Text>
                  <Button
                    ef={btnRef}
                    fill="#fff"
                    rightIcon={<Arrow />}
                    variant="primary"
                    onClick={(e) => {
                      onMaterialOpen();
                      setData({ nombre, src, desc, ...rest });
                    }}
                  >
                    Ver más
                  </Button>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
      <Drawer
        body={
          <Stack spacing={4}>
            <Text fontSize="2">{data.desc}</Text>
            <Stack alignItems="center" direction="row" justifyContent="space-between">
              <Badge>{data.category}</Badge>
              <Badge colorScheme={colorSchemes[data.state]}>{data.state} ESTADO</Badge>
            </Stack>
          </Stack>
        }
        finalFocusRef={btnRef}
        footer={
          <Button
            isFullWidth
            leftIcon={<Cart />}
            variant="primary"
            onClick={(e) => handleAddMaterialToCart(data)}
          >
            Agregar material al carrito
          </Button>
        }
        header={
          <Stack alignItems="center" display="flex" flexDirection="column" spacing={4}>
            <Image
              boxSize="200px"
              fallbackSrc="/images/fallback.jpg"
              objectFit="cover"
              src={data.src}
            />
          </Stack>
        }
        isOpen={isMaterialOpen}
        size="xs"
        title={data.nombre}
        onClose={onMaterialClose}
      />
      <Drawer
        body={
          <Stack spacing={4}>
            {cartCount > 0 ? (
              cart.map(({ nombre, desc, src }, index) => (
                <CartItem
                  key={index}
                  deleteMaterialFromCart={deleteMaterialFromCart}
                  desc={desc}
                  nombre={nombre}
                  src={src}
                />
              ))
            ) : (
              <Heading fontSize="6">No tienes elementos en tu carrito. Agrega ya</Heading>
            )}
          </Stack>
        }
        footer={
          cartCount > 0 && (
            <Button variant="primary">
              Pedir {cartCount > 1 ? "prestados" : "prestado"} ({cartCount}){" "}
              {cartCount > 1 ? "materiales" : "material"}
            </Button>
          )
        }
        isOpen={isCartOpen}
        size="md"
        title={`Tu carrito (${cartCount})`}
        onClose={onCartClose}
      />
      <WhiteCircle left="-5vw" position="absolute" size="big" />
      <WhiteCircle position="absolute" right="5%" size="little" top="30%" />
    </>
  );
};
