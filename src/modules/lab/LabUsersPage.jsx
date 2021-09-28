import React from "react";
import { SectionInfo, Tab, Searchbar, Text, Table, Drawer, FormControl } from "@ui";
import { Form, Formik } from "formik";
import { Prestamo, NewPrestamo, Grid, List, Table as TableIcon } from "@icons";
import {
  Button,
  TabPanels,
  TabPanel,
  TabList,
  Icon,
  Stack,
  InputLeftAddon,
  Badge
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";

import AllUsersTable from "../Users/AllUsersTable";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USER } from "../../graphql/mutations/users";
import { GET_ALL_USERS } from "../../graphql/queries/users";
import moment from "moment";

export const LabUsersPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [createUser, { data: mutationData, loading: mutationLoading, error: mutationError }] =
  useMutation(CREATE_USER);

  
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Oh no... {error.message}</p>;

  const COLUMNS = [
    {
      Header: "Cedula",
      accessor: "cedula",
    },
    {
      Header: "Nombre",
      accessor: "nombre",
    },
    {
      Header: "Direccion",
      accessor: "direccion",
    },
    {
      Header: "Avatar",
      accessor: "foto_usuario",
    },
    {
      Header: "Telefono",
      accessor: "telefono",
    },
    {
      Header: "Tipo de Usuario",
      accessor: "tipo_usuario",
      Cell({ row }) {
        return <Badge>{row.original.tipo_usuario}</Badge>;
      },
    },
    {
      Header: "Fecha de Nacimiento",
      accessor: "fecha_nacimiento",
      Cell({row}) {
        const sqlDate = row.original.fecha_nacimiento;
        const jsDate = Date(Date.parse(sqlDate.replace(/-/g, '/')));
        const date = moment(jsDate).format('L');

        return date;
      }
    },
  ];

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
        <Button leftIcon={<NewPrestamo />} onClick={onOpen} variant="primary">
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
          <Table columns={COLUMNS} data={data.getUsers}/>
          <Drawer
            isNotCenter
            body={
              <Formik
                initialValues={{
                  cedula: "",
                  nombre: "",
                  pass: "",
                  direccion: "",
                  foto_usuario: "",
                  telefono: "",
                  tipo_usuario: "",
                  fecha_nacimiento: "",
                }}
                onSubmit={(values) => {
                  return createUser({
                    variables: { registerData: {...values, reserva: ""} },
                    update: (cache) => {
                      cache.evict({ fieldName: "getUsers" });
                      onClose();
                    },
                  });
                }}
              >
                {({ isSubmitting }) => (
                  <Form id="new-material-form">
                    <Stack spacing={4}>
                      <FormControl
                        isLabelLeftç
                        control="input"
                        isRequired={true}
                        label="Cedula de Usuario"
                        name="cedula"
                        placeholder="ej. 54548246"
                        type="number"
                      />
                      <FormControl
                        isLabelLeft
                        control="input"
                        isRequired={true}
                        label="Nombre"
                        name="nombre"
                        placeholder="ej. Marcos Cianzio"
                        type="text"
                      />
                      <FormControl
                        isLabelLeft
                        control="input"
                        isRequired={true}
                        label="Contraseña"
                        name="pass"
                        placeholder="ej. ******"
                        type="password"
                      />
                      <FormControl
                        isLabelLeft
                        control="input"
                        label="Dirección"
                        name="direccion"
                        placeholder="ej. Sanchez 294"
                        type="text"
                      />
                      <FormControl
                        isLabelLeft
                        control="input"
                        isRequired={true}
                        label="Foto del Usuario"
                        name="foto_usuario"
                        placeholder="pone la fotito"
                        type="text"
                      />
                      <FormControl
                        isLabelLeft
                        control="input"
                        label="telefono"
                        name="telefono"
                        placeholder="ej. 45325140"
                        type="number"
                      />
                      <FormControl
                        isLabelLeft
                        control="input"
                        isRequired={true}
                        label="Tipo de Usuario"
                        name="tipo_usuario"
                        placeholder="ej. Alumno"
                        type="text"
                      />
                       <FormControl
                        isLabelLeft
                        control="input"
                        isRequired={true}
                        label="Fecha de nacimiento"
                        name="fecha_nacimiento"
                        type="date"
                      />
                    </Stack>
                  </Form>
                )}
              </Formik>
            }
            footer={
              <Button
                form="new-material-form"
                type="submit"
                variant="primary"
                isLoading={mutationLoading}
              >
                Crear nuevo material
              </Button>
            }
            isOpen={isOpen}
            size="md"
            title="Crear nuevo material"
            onClose={onClose}
          />
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
