import React from "react";
import { SectionInfo, Tab, Input, Text } from "@ui";
import { Prestamo, NewPrestamo } from "@icons";
import {
  Button,
  TabPanels,
  TabPanel,
  TabList,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Image,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";

import AllLendsTable from "../Lends/AllLendsTable";
import LendsDrawer from "../../ui/components/LendsDrawer";

export const LabLendsPage = () => {
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
  const btnRef = React.useRef();

  const [user, setUser] = React.useState("");
  const [materialsFiltered, setMaterialsFiltered] = React.useState([]);
  const [materialSelected, setMaterialSelected] = React.useState("");

  React.useEffect(() => {
    setMaterialsFiltered(
      Materials.filter((material) => {
        return material.nombre.includes(user);
      })
    );
  }, [user]);

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
    <SectionInfo
      button={
        <Button leftIcon={<NewPrestamo />} variant="primary" onClick={onDrawerOpen}>
          Nuevo Prestamo
        </Button>
      }
      description="En la sección de prestamos, puedes revisar y administrar todos los prestamos con sus detalles. Puedes ver, editar y eliminar cualquier tipo de información como la reserva de todos los materiales, ordenados por IDs, fechas, y tipo de prestamo. El acceso a esta área es limitada. Solo Laboratoristas pueden alcanzarla. Los cambios que hagas son irreversibles."
      icon={<Prestamo size="big" />}
      title="Prestamos"
    >
      <TabList
        bg="lendlab.gray.100"
        borderBottomRadius="32px"
        paddingTop={8}
        paddingX={{ base: 0, md: 40 }}
      >
        <Tab>
          <Prestamo /> TODOS
        </Tab>
        <Tab>FINALIZADOS</Tab>
        <Tab>SIN DEVOLVER</Tab>
        <Tab>DEVUELTOS</Tab>
      </TabList>
      <TabPanels bg="white">
        <TabPanel paddingX={{ base: 0, md: 40 }}>
          <AllLendsTable />

          <LendsDrawer
            userButton={
              <Button
                bg="lendlab.gray.100"
                borderRadius="14px"
                color="lendlab.gray.300"
                display="block"
                fontSize="13px"
                fontWeight="normal"
                size="lg"
                textAlign="left"
                onClick={onModalOpen}
              >
                {materialSelected == "" ? "Buscar usuario" : materialSelected}
              </Button>
            }
            {...{ isDrawerOpen, onDrawerClose, btnRef }}
          />
          <Modal isOpen={isModalOpen} onClose={onModalClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <Input
                  name="user"
                  placeholder="Buscar Usuario"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </ModalHeader>
              <ModalBody>
                <Stack spacing={4}>
                  {user == ""
                    ? Materials.slice(0, 3).map((material, index) => (
                        <Stack
                          key={index}
                          cursor="pointer"
                          direction="row"
                          spacing={4}
                          onClick={() => {
                            setMaterialSelected(material.nombre);
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
                            setMaterialSelected(material.nombre);
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
        </TabPanel>
        <TabPanel>
          <p>2</p>
        </TabPanel>
        <TabPanel>
          <p>3</p>
        </TabPanel>
      </TabPanels>
    </SectionInfo>
  );
};
