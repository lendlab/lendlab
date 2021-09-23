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
  const [usersFiltered, setUsersFiltered] = React.useState([]);
  const [userSelected, setUserSelected] = React.useState("");

  React.useEffect(() => {
    setUsersFiltered(
      Users.filter((userEl) => {
        return userEl.nombre.toLowerCase().includes(user.toLowerCase());
      })
    );
  }, [user]);

  console.log("a");
  const Users = [
    {
      nombre: "Marcos Cianzio",
      src: "/images/Cianzio.jpg",
      desc: "54548246",
    },
    {
      nombre: "Francisco Fiorelli",
      src: "/images/Fiorelli.jpg",
      desc: "54548246",
    },
    {
      nombre: "Nicolás Heredia",
      src: "/images/Heredia.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur . Duis aute irure dolor in reprehenderit",
    },
    {
      nombre: "Iván Prestes",
      src: "/Prestes.jpg",
      desc: "54548246",
    },
  ];

  return (
    <SectionInfo
      button={
        <Button leftIcon={<NewPrestamo />} variant="primary" onClick={onDrawerOpen}>
          Nuevo Prestamo
        </Button>
      }
      description="En la sección de prestamos, puedes revisar y administrar todos los prestamos con sus detalles. Puedes ver, editar y eliminar cualquier tipo de información como la reserva de todos los useres, ordenados por IDs, fechas, y tipo de prestamo. El acceso a esta área es limitada. Solo Laboratoristas pueden alcanzarla. Los cambios que hagas son irreversibles."
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
                color={userSelected == "" ? "lendlab.gray.300" : "lendlab.black"}
                display="block"
                fontSize="13px"
                fontWeight="normal"
                size="lg"
                textAlign="left"
                onClick={onModalOpen}
              >
                {userSelected == "" ? "Buscar usuario" : userSelected}
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
                    ? Users.slice(0, 3).map((user, index) => (
                        <Stack
                          key={index}
                          cursor="pointer"
                          direction="row"
                          spacing={4}
                          onClick={() => {
                            setUserSelected(user.nombre);
                            onModalClose();
                          }}
                        >
                          <Image
                            borderRadius="12px"
                            boxSize="70px"
                            objectFit="cover"
                            src={user.src}
                          />
                          <Stack justifyContent="center">
                            <Text color="black" fontSize="3" fontWeight="bold" textAlign="left">
                              {user.nombre}
                            </Text>
                            <Text fontSize="3" noOfLines={1} textAlign="left">
                              {user.desc}
                            </Text>
                          </Stack>
                        </Stack>
                      ))
                    : usersFiltered.map((user, index) => (
                        <Stack
                          key={index}
                          cursor="pointer"
                          direction="row"
                          spacing={4}
                          onClick={() => {
                            setusersSelected([...usersSelected, user]);
                            onModalClose();
                          }}
                        >
                          <Image
                            borderRadius="12px"
                            boxSize="70px"
                            objectFit="cover"
                            src={user.src}
                          />
                          <Stack justifyContent="center">
                            <Text color="black" fontSize="3" fontWeight="bold" textAlign="left">
                              {user.nombre}
                            </Text>
                            <Text fontSize="3" noOfLines={1} textAlign="left">
                              {user.desc}
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
