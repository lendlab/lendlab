import React from "react";
import { SectionInfo, Tab, Searchbar, Text, Table } from "@ui";
import { Prestamo, NewPrestamo, Grid, List, Table as TableIcon } from "@icons";
import {
  Button,
  TabPanels,
  TabPanel,
  TabList,
  Icon,
  Stack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";

import AllUsersTable from "../Users/AllUsersTable";

export const LabUsersPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const options = [
    {
      key: "Nasheeee",
      value: 1,
    },
    {
      key: "Nasheeee",
      value: 1,
    },
    {
      key: "Nasheeee",
      value: 1,
    },
    {
      key: "Nasheeee",
      value: 1,
    },
  ];

  return (
    <SectionInfo
      button={
        <Button leftIcon={<NewPrestamo />} variant="primary">
          Nuevo Usuario
        </Button>
      }
      description="En la sección de usuarios, puedes revisar y administrar todos los usuarios con sus detalles. Puedes ver, editar y elimina cualquier tipo de información como su nombre, ordenados por sus Cedulas fecha de nacimiento, y tipo de usuario. El acceso a esta área es limitada.  Solo Laboratoristas pueden alcanzarla. Los cambios que hagas son irreversibles."
      icon={<Prestamo size="big" />}
      title="Usuarios"
    >
      <TabList bg="lendlab.gray.100" borderBottomRadius="32px" paddingTop={8} paddingX={40}>
        <Tab>
          <Icon as={Prestamo} h="none" marginRight={2} w="none" /> TODOS
        </Tab>
        <Tab>FINALIZADOS</Tab>
        <Tab>SIN DEVOLVER</Tab>
        <Tab>DEVUELTOS</Tab>
      </TabList>
      <TabPanels bg="white">
        <TabPanel paddingX={40}>
          <AllUsersTable />
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
