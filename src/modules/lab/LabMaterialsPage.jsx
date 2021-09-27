import React from "react";
import { SectionInfo, Tab, FormControl, Table, Drawer } from "@ui";
import { Prestamo, NewPrestamo } from "@icons";
import {
  Button,
  TabPanels,
  TabPanel,
  TabList,
  Stack,
  InputLeftAddon,
  Badge,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useQuery, useMutation } from "@apollo/client";
import { useDisclosure } from "@chakra-ui/hooks";

import { CREATE_MATERIAL } from "../../graphql/mutations/materials";
import { GET_ALL_MATERIALS } from "../../graphql/queries/materials";

export const LabMaterialsPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_MATERIALS);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [createMaterial, { data: mutationData, loading: mutationLoading, error: mutationError }] =
    useMutation(CREATE_MATERIAL);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Oh no... {error.message}</p>;

  const colorSchemes = {
    Bueno: "green",
    Roto: "red",
    Regular: "yellow",
  };
  const COLUMNS = [
    {
      Header: "ID",
      accessor: "id_material",
    },
    {
      Header: "Nombre",
      accessor: "nombre",
    },
    {
      Header: "Etiqueta",
      accessor: "etiqueta",
    },
    {
      Header: "Categoria",
      accessor: "categoria",
      Cell({ row }) {
        return <Badge>{row.original.categoria}</Badge>;
      },
    },
    {
      Header: "Descripcion",
      accessor: "descripcion",
    },
    {
      Header: "Cantidad",
      accessor: "cantidad",
    },
    {
      Header: "Foto",
      accessor: "foto",
    },
    {
      Header: "Estado",
      accessor: "estado",
      Cell({ row }) {
        return <Badge colorScheme={colorSchemes[row.original.estado]}>{row.original.estado}</Badge>;
      },
    },
  ];

  return (
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
      <TabList bg="lendlab.gray.100" borderBottomRadius="32px" paddingTop={8} paddingX={40}>
        <Tab>
          <Prestamo /> TODOS
        </Tab>
        <Tab>FINALIZADOS</Tab>
        <Tab>SIN DEVOLVER</Tab>
        <Tab>DEVUELTOS</Tab>
      </TabList>
      <TabPanels bg="white">
        <TabPanel paddingX={{ base: 0, md: 40 }}>
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
                    },
                  });
                }}
              >
                {({ isSubmitting }) => (
                  <Form id="new-material-form">
                    <Stack spacing={4}>
                      <FormControl
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
                onClick={() => onClose()}
              >
                Crear nuevo material
              </Button>
            }
            isOpen={isOpen}
            size="md"
            title="Crear nuevo material"
            onClose={onClose}
          />
          <Table columns={COLUMNS} data={data.getMaterials} />
        </TabPanel>
        <TabPanel />
        <TabPanel>
          <p>3</p>
        </TabPanel>
      </TabPanels>
    </SectionInfo>
  );
};
