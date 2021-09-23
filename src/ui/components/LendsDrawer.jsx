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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import { Text, Heading, Input, Select } from "@ui";
import { Prestamo } from "@icons";
import { useDisclosure } from "@chakra-ui/hooks";
const LendsDrawer = ({ isDrawerOpen, onDrawerClose, userButton, btnRef }) => {
  const [material, setMaterial] = React.useState("");

  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();

  const [materialsFiltered, setMaterialsFiltered] = React.useState([]);
  const [materialsSelected, setMaterialsSelected] = React.useState([]);

  React.useEffect(() => {
    setMaterialsFiltered(
      Materials.filter((materialEl) => {
        return materialEl.nombre.toLowerCase().includes(material.toLowerCase());
      })
    );
  }, [material]);

  const handleDelete = (materialDeleted) => {
    setMaterialsSelected(
      materialsSelected.filter((materialEl) => {
        return materialEl.nombre != materialDeleted;
      })
    );
  };

  console.log("a");
  const Materials = [
    {
      nombre: "Ceibalita",
      src: "https://www.lr21.com.uy/wp-content/uploads/2020/03/plan-ceibal.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur . Duis aute irure dolor in reprehenderit",
    },
    {
      nombre: "Auricular",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Earphones_BW_2011-12-10_15-49-08.JPG/1200px-Earphones_BW_2011-12-10_15-49-08.JPG",
      desc: "Lorem ipsum dolor sit amet, consectetur . Duis aute irure dolor in reprehenderit",
    },
    {
      nombre: "Cargador",
      src: "https://www.digitaloutlet.com.uy/imgs/productos/productos34_3721.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur . Duis aute irure dolor in reprehenderit",
    },
    {
      nombre: "GOD ceibalita",
      src: "https://icdn.dtcn.com/image/digitaltrends_es/185-xps-13-laptop-resized-2.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur . Duis aute irure dolor in reprehenderit",
    },
    {
      nombre: "Martillo",
      src: "https://geant.vteximg.com.br/arquivos/ids/268992-1000-1000/478372.jpg?v=637522818658200000",
      desc: "Lorem ipsum dolor sit amet, consectetur . Duis aute irure dolor in reprehenderit",
    },
    {
      nombre: "Ceibalita",
      src: "https://www.lr21.com.uy/wp-content/uploads/2020/03/plan-ceibal.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur . Duis aute irure dolor in reprehenderit",
    },
  ];

  return (
    <>
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
                <FormLabel>Materiales ({materialsSelected.length})</FormLabel>
                <Stack
                  bg="lendlab.gray.100"
                  borderRadius="17px"
                  maxH="300px"
                  overflowY="scroll"
                  padding={4}
                >
                  <Stack alignItems="center" direction="row" justifyContent="space-between">
                    <Text fontSize="2" textAlign="left">
                      Puedes agregar más de 1 material
                    </Text>
                    <Button variant="primary" onClick={onModalOpen}>
                      Agregar material
                    </Button>
                  </Stack>
                  <Stack>
                    {materialsSelected.map((material, index) => (
                      <Stack key={index} alignItems="center" direction="row" overflow="hidden">
                        <Image borderRadius="14px" boxSize="80px" src={material.src} />
                        <Stack>
                          <Stack alignItems="center" direction="row" justifyContent="space-between">
                            <Text color="black" fontSize="3" fontWeight="bold" textAlign="left">
                              {material.nombre}
                            </Text>
                            <Button
                              size="xs"
                              variant="secondary"
                              onClick={(e) => handleDelete(material.nombre)}
                            >
                              Borrar
                            </Button>
                          </Stack>

                          <Text fontSize="3" noOfLines={2} textAlign="left">
                            {material.desc}
                          </Text>
                        </Stack>
                      </Stack>
                    ))}
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
      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Input
              name="material"
              placeholder="Buscar Material"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
            />
          </ModalHeader>
          <ModalBody>
            <Stack spacing={4}>
              {material == "" && materialsSelected.length < 1
                ? Materials.slice(0, 3).map((material, index) => (
                    <Stack
                      key={index}
                      cursor="pointer"
                      direction="row"
                      spacing={4}
                      onClick={() => {
                        setMaterialsSelected([...materialsSelected, material]);
                        onModalClose();
                      }}
                    >
                      <Image
                        borderRadius="12px"
                        boxSize="70px"
                        objectFit="cover"
                        src={material.src}
                      />
                      <Stack justifyContent="center">
                        <Text color="black" fontSize="3" fontWeight="bold" textAlign="left">
                          {material.nombre}
                        </Text>
                        <Text fontSize="3" noOfLines={1} textAlign="left">
                          {material.desc}
                        </Text>
                      </Stack>
                    </Stack>
                  ))
                : materialsFiltered.map((material, index) => (
                    <Stack
                      key={index}
                      cursor="pointer"
                      direction="row"
                      spacing={4}
                      onClick={() => {
                        setMaterialsSelected([...materialsSelected, material]);
                        onModalClose();
                      }}
                    >
                      <Image
                        borderRadius="12px"
                        boxSize="70px"
                        objectFit="cover"
                        src={material.src}
                      />
                      <Stack justifyContent="center">
                        <Text color="black" fontSize="3" fontWeight="bold" textAlign="left">
                          {material.nombre}
                        </Text>
                        <Text fontSize="3" noOfLines={1} textAlign="left">
                          {material.desc}
                        </Text>
                      </Stack>
                    </Stack>
                  ))}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LendsDrawer;
