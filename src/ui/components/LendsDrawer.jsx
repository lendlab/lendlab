import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  FormLabel,
  Button,
  Image,
  Circle,
} from "@chakra-ui/react";
import { Text, Heading, Input, Select } from "@ui";
import { Prestamo } from "@icons";

const LendsDrawer = ({ isDrawerOpen, onDrawerClose, userButton, btnRef }) => {
  return (
    <Drawer
      finalFocusRef={btnRef}
      isOpen={isDrawerOpen}
      placement="right"
      size="lg"
      onClose={onDrawerClose}
    >
      <DrawerOverlay />
      <DrawerContent borderStartRadius="40px">
        <DrawerCloseButton />
        <DrawerHeader paddingTop={10}>
          <Stack alignItems="center" direction="row">
            <Prestamo size="big" />
            <Heading fontSize="8" textAlign="left">
              Crear Nuevo Prestamo
            </Heading>
          </Stack>
        </DrawerHeader>

        <DrawerBody>
          <Stack spacing={8}>
            <Stack spacing={2}>
              <FormLabel>Usuario</FormLabel>
              {userButton}
            </Stack>

            <Stack spacing={2}>
              <FormLabel>Materiales (4)</FormLabel>
              <Stack bg="lendlab.gray.100" borderRadius="17px" maxH="300px" padding={4}>
                <Stack alignItems="center" direction="row" justifyContent="space-between">
                  <Text fontSize="2" textAlign="left">
                    Puedes agregar más de 1 material
                  </Text>
                  <Button variant="primary">Agregar material</Button>
                </Stack>
                <Stack>
                  <Stack alignItems="center" direction="row" overflow="hidden">
                    <Image
                      borderRadius="14px"
                      boxSize="80px"
                      src="https://icdn.dtcn.com/image/digitaltrends_es/185-xps-13-laptop-resized-2.jpg"
                    />
                    <Stack>
                      <Text color="black" fontSize="3" fontWeight="bold" textAlign="left">
                        Ceibalita GOD
                      </Text>
                      <Text fontSize="3" noOfLines={2} textAlign="left">
                        Lorem ipsum dolor sit amet, consectetur . Duis aute irure dolor in
                        reprehenderit in voluptate velit Lorem ipsum dolor sit amet, consectetur .
                        Duis aute irure dolor in reprehenderit in voluptate velit Lorem ipsum dolor
                        sit amet, consectetur . Duis aute irure dolor in reprehenderit in voluptate
                        velit
                      </Text>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing={2}>
              <FormLabel>Plazo</FormLabel>
              <Stack alignItems="center" direction="row" position="relative" w="100%">
                <Input type="date" w="50%" />
                <Circle
                  bg="lendlab.gray.100"
                  left="49%"
                  marginRight="auto"
                  position="absolute"
                  size="40px"
                  transform="translate(-50%, 0)"
                  zIndex="300"
                >
                  -
                </Circle>
                <Input paddingLeft="32px" type="date" w="50%" />
              </Stack>
            </Stack>
            <Stack spacing={2}>
              <FormLabel>Tipo</FormLabel>

              <Select
                options={[
                  { key: "Externo", value: "Externo" },
                  { key: "Interno", value: "Interno" },
                ]}
                placeholder="Selecciona un tipo"
              />
            </Stack>
          </Stack>
        </DrawerBody>

        <DrawerFooter flexDirection="column">
          <Button isFullWidth colorScheme="blue" variant="primary">
            Crear nuevo prestamo
          </Button>
          <Button isFullWidth mt={3} variant="secondary" onClick={onDrawerClose}>
            Cancelar
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default LendsDrawer;
