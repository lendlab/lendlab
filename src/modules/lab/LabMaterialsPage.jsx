import React from "react";
import { SectionInfo, Tab } from "@ui";
import { Prestamo, NewPrestamo } from "@icons";
import { Button, TabPanels, TabPanel, TabList } from "@chakra-ui/react";

export const LabMaterialsPage = () => {
  return (
    <SectionInfo
      button={
        <Button leftIcon={<NewPrestamo />} variant="primary">
          Nuevo Material
        </Button>
      }
      description="En la sección de materiales, puedes revisar y administrar todos los materiales con sus detalles. Puedes ver y editar cualquier tipo de información como los nombres de todos los materiales, ordenados por IDs, etiqueta y cantidad. El acceso a esta área es limitado. Solo Laboratoristas pueden alcanzarla. Los cambios que hagas son irreversibles"
      icon={<Prestamo size="big" />}
      title="Materiales"
    >
      <TabList bg="lendlab.gray.100" borderBottomRadius="32px" paddingTop={8} paddingX={40}>
        <Tab>
          <Prestamo /> TODOS
        </Tab>
        <Tab>FINALIZADOS</Tab>
        <Tab>SIN DEVOLVER</Tab>
        <Tab>DEVUELTOS</Tab>
      </TabList>
      <TabPanels bg="white">
        <TabPanel>
          <p>1</p>
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
