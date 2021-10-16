import { useMutation } from "@apollo/client";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Button,
  InputLeftAddon,
  Stack,
  TabList,
  TabPanel,
  TabPanels,
  useToast,
} from "@chakra-ui/react";
import { CREATE_MATERIAL } from "@graphql/mutations/materials";
import { NewPrestamo, Prestamo } from "@icons";
import { Drawer, FormControl, SectionInfo, Tab } from "@ui";
import { Form, Formik } from "formik";
import React, { useEffect, useRef } from "react";

import { MaterialsPageLayout } from "../../layouts/Laboratorist/MaterialsPageLayout";

import { AllMaterials } from "./AllMaterials";

export const LabMaterialsPage = () => {
  const toast = useToast();
  const firstField = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [createMaterial, { data: mutationData, loading: mutationLoading, error: mutationError }] =
    useMutation(CREATE_MATERIAL);

  useEffect(() => {
    if (mutationError) {
      toast({
        title: "Ha ocurrido un error!",
        description: "No te preocupes, ya lo solucionaremos :)",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  }, [mutationError, toast]);

  return (
    <MaterialsPageLayout>
      <SectionInfo
        button={
          <Button leftIcon={<NewPrestamo />} variant="primary" onClick={onOpen}>
            Nuevo Material
          </Button>
        }
        description="En la sección de materiales, puedes revisar y administrar todos los materiales con sus detalles. Puedes ver y editar cualquier tipo de información como los nombres de todos los materiales, ordenados por IDs, etiqueta y cantidad. El acceso a esta área es limitado. Solo Laboratoristas pueden alcanzarla. Los cambios que hagas son irreversibles"
        icon={<Prestamo size="big" />}
        title="Materiales"
      >
        <TabList bg="lendlab.gray.100" paddingTop={8} paddingX={{ base: 0, md: 18 }}>
          <Tab>
            <Prestamo /> TODOS
          </Tab>
          <Tab>FINALIZADOS</Tab>
          <Tab>SIN DEVOLVER</Tab>
          <Tab>DEVUELTOS</Tab>
        </TabList>
        <TabPanels bg="white">
          <TabPanel paddingX={{ base: 0, md: 18 }}>
            <Drawer
              isNotCenter
              body={
                <Formik
                  initialValues={{
                    nombre: "",
                    etiqueta: "",
                    categoria: "",
                    descripcion: "",
                    cantidad: "",
                    foto: "",
                    estado: "",
                  }}
                  onSubmit={(values) => {
                    return createMaterial({
                      variables: { newMaterialData: values },
                      update: (cache) => {
                        cache.evict({ fieldName: "getMaterials" });
                        onClose();
                        toast({
                          title: `Se ha creado correctamente el material ${values.nombre}!`,
                          description: "Lo has hecho correctamente c:",
                          status: "success",
                          duration: 2000,
                          isClosable: true,
                        });
                      },
                    });
                  }}
                >
                  {(props) => (
                    <Form id="new-material-form">
                      <Stack spacing={4}>
                        <FormControl
                          ref={firstField}
                          isLabelLeft
                          control="input"
                          isRequired={true}
                          label="Nombre del Material"
                          name="nombre"
                          placeholder="ej. Ceibalita"
                          type="text"
                        />
                        <FormControl
                          isLabelLeft
                          control="input"
                          isRequired={true}
                          label="Etiqueta"
                          name="etiqueta"
                          placeholder="ej. 12"
                          type="text"
                        >
                          <InputLeftAddon
                            children="#"
                            bg="lendlab.gray.100"
                            border="none"
                            color="lendlab.gray.300"
                          />
                        </FormControl>
                        <FormControl
                          isLabelLeft
                          control="input"
                          isRequired={true}
                          label="Categoría"
                          name="categoria"
                          placeholder="ej. Laptops"
                          type="text"
                        />
                        <FormControl
                          isLabelLeft
                          control="input"
                          label="Descripcion"
                          name="descripcion"
                          placeholder="descripcion"
                          type="text"
                        />
                        <FormControl
                          isLabelLeft
                          control="input"
                          isRequired={true}
                          label="Cantidad"
                          name="cantidad"
                          placeholder="ej.10"
                          type="number"
                        />
                        <FormControl
                          isLabelLeft
                          control="input"
                          label="Foto del Material"
                          name="foto"
                          placeholder="Foto"
                          type="text"
                        />
                        <FormControl
                          isLabelLeft
                          control="input"
                          isRequired={true}
                          label="Estado del material"
                          name="estado"
                          placeholder="ej. Roto"
                          type="text"
                        />
                      </Stack>
                    </Form>
                  )}
                </Formik>
              }
              footer={
                <Button
                  form="new-material-form"
                  isLoading={mutationLoading}
                  type="submit"
                  variant="primary"
                >
                  Crear nuevo material
                </Button>
              }
              initialFocusRef={firstField}
              isOpen={isOpen}
              size="md"
              title="Crear nuevo material"
              onClose={onClose}
            />
            <AllMaterials />
          </TabPanel>
          <TabPanel />
          <TabPanel>
            <p>3</p>
          </TabPanel>
        </TabPanels>
      </SectionInfo>
    </MaterialsPageLayout>
  );
};
