import React from "react";
import { Box, Heading, Info, ExportButton, Text } from "@ui";
import { Prestamo, NewPrestamo } from "@icons";
import { Stack, Button, TabList, Tabs, Tab, TabPanels, TabPanel } from "@chakra-ui/react";

export const LabLendsPage = () => {
  return (
    <Box bg="lendlab.gray.100" borderBottomRadius="30px" marginLeft={80} paddingX={40}>
      <Stack h="full" justifyContent="space-between" spacing={8}>
        <Stack spacing={6}>
          <Stack alignItems="center" direction="row" justifyContent="space-between" paddingTop={12}>
            <Stack alignItems="center" direction="row" spacing={4}>
              <Prestamo size="big" />
              <Heading fontSize="4xl" textAlign="left">
                Prestamos
              </Heading>
              <Info tooltip="No se" />
            </Stack>
            <Stack direction="row">
              <Button leftIcon={<NewPrestamo />} variant="primary">
                Nuevo Prestamo
              </Button>
              <ExportButton />
            </Stack>
          </Stack>
          <Text color="lendlab.gray.400" fontSize="16px" textAlign="left">
            En la sección de prestamos, puedes revisar y administrar todos los prestamos con sus
            detalles. Puedes ver, editar y eliminar cualquier tipo de información como la reserva de
            todos los materiales, ordenados por IDs, fechas, y tipo de prestamo. El acceso a esta
            área es limitada. Solo Laboratoristas pueden alcanzarla. Los cambios que hagas son
            irreversibles.
          </Text>
        </Stack>
        <Tabs justifySelf="flex-end" variant="unstyled">
          <TabList>
            <Tab
              _selected={{
                borderTopRadius: 14,
                color: "black",
                bg: "lendlab.gray.200",
                fontWeight: "bold",
                boxShadow: "none",
                borderBottomWidth: 1,
                borderBottomColor: "black",
              }}
            >
              <Prestamo /> TODOS
            </Tab>
            <Tab
              _selected={{
                color: "black",
                bg: "lendlab.gray.200",
                fontWeight: 500,
                boxShadow: "none",
                borderBottomWidth: 1,
                borderBottomColor: "black",
              }}
            >
              FINALIZADOS
            </Tab>
            <Tab
              _selected={{
                color: "black",
                bg: "lendlab.gray.200",
                fontWeight: 500,
                boxShadow: "none",
                borderBottomWidth: 1,
                borderBottomColor: "black",
              }}
            >
              SIN DEVOLVER
            </Tab>
            <Tab
              _selected={{
                color: "black",
                bg: "lendlab.gray.200",
                fontWeight: 500,
                boxShadow: "none",
                borderBottomWidth: 1,
                borderBottomColor: "black",
              }}
            >
              DEVUELTOS
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel padding={0} />
            <TabPanel padding={0} />
            <TabPanel padding={0} />
          </TabPanels>
        </Tabs>
      </Stack>
    </Box>
  );
};
