import React from "react";
import { SectionInfo, Tab } from "@ui";
import { Prestamo, NewPrestamo } from "@icons";
import { Button, TabPanels, TabPanel, TabList } from "@chakra-ui/react";

import { AllReserves } from "./AllReserves";

export const LabReservesPage = () => {
  return (
    <SectionInfo
      description="En la sección de reservas, puedes revisar y administrar todas las reservas con sus detalles. Puedes ver y editar cualquier tipo de información como lo aceptar o rechazar reservas, ordenados por su fecha, id y usuario. El acceso a esta área es limitado. Solo Laboratoristas pueden alcanzarla. Los cambios que hagas son irreversibles"
      icon={<Prestamo size="big" />}
      title="Reservas"
    >
      <TabList bg="lendlab.gray.100" paddingTop={8} paddingX={18}>
        <Tab>
          <Prestamo /> TODOS
        </Tab>
        <Tab>FINALIZADOS</Tab>
        <Tab>SIN DEVOLVER</Tab>
        <Tab>DEVUELTOS</Tab>
      </TabList>
      <TabPanels bg="white">
        <TabPanel>
          <AllReserves />
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
