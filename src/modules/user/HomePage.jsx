import { useQuery } from "@apollo/client";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Button, Center, Divider, Image, Stack, useToast, Badge } from "@chakra-ui/react";
import { useCart } from "@hooks/useCart";
import { Arrow, Cart } from "@icons";
import { Heading, Text, WhiteCircle, Drawer } from "@ui";
import React from "react";

import { GET_POPULAR_MATERIALS } from "../../graphql/mutations/materials";

export const HomePage = () => {
  const colorSchemes = {
    Buen: "green",
    Mal: "red",
    Regular: "yellow",
  };

  const { loading, data: materials, error } = useQuery(GET_POPULAR_MATERIALS);

  const { addMaterialToCart } = useCart();

  const [data, setData] = React.useState({});

  const {
    isOpen: isMaterialOpen,
    onOpen: onMaterialOpen,
    onClose: onMaterialClose,
  } = useDisclosure();
  const btnRef = React.useRef();

  const handleAddMaterialToCart = (material) => {
    addMaterialToCart(material);
    onMaterialClose();
  };

  if (loading || !data) return "loading...";

  if (error) return <div>{error.message}</div>;

  return (
    <>
      {materials.getPopularMaterials.length > 0 && (
        <Box mt={8}>
          <Stack alignItems="center" direction="row" justifyContent="space-between">
            <Stack alignItems="center" direction="row">
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
            {materials.getPopularMaterials.map(
              ({ id_material, foto, nombre, descripcion, ...rest }, index) => (
                <Stack key={index} alignItems="center" spacing={4}>
                  <Image
                    boxSize="200px"
                    fallbackSrc="/images/fallback.jpg"
                    objectFit="cover"
                    src={foto}
                  />
                  <Text color="black" fontSize="2" fontWeight="bold">
                    {nombre}
                  </Text>
                  <Text fontSize="2">{descripcion}</Text>
                  <Button
                    ef={btnRef}
                    fill="#fff"
                    rightIcon={<Arrow />}
                    variant="primary"
                    onClick={(e) => {
                      onMaterialOpen();
                      setData({ id_material, nombre, foto, descripcion, ...rest });
                    }}
                  >
                    Ver más
                  </Button>
                </Stack>
              )
            )}
          </Stack>
        </Box>
      )}
      <Drawer
        body={
          <Stack spacing={4}>
            <Text fontSize="2">{data.descripcion}</Text>
            <Stack alignItems="center" direction="row" justifyContent="space-between">
              <Badge>{data.categoria}</Badge>
              <Badge colorScheme={colorSchemes[data.estado]}>{data.estado} ESTADO</Badge>
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
              src={data.foto}
            />
          </Stack>
        }
        isOpen={isMaterialOpen}
        size="xs"
        title={data.nombre}
        onClose={onMaterialClose}
      />
      <WhiteCircle left="-5vw" position="absolute" size="big" />
      <WhiteCircle position="absolute" right="5%" size="little" top="30%" />
    </>
  );
};
