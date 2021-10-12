import { useMutation } from "@apollo/client";
import { useDisclosure } from "@chakra-ui/hooks";
import { Button, Stack, useToast } from "@chakra-ui/react";
import { Tbody, Td, Tr } from "@chakra-ui/table";
import { DELETE_MATERIAL, UPDATE_MATERIAL } from "@graphql/mutations/materials";
import { Edit, Frame, Grid, Messages, Prestamo, ProfileUser2, SMS, Trash } from "@icons";
import { Drawer, FormControl, Text } from "@ui";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";

export const TableBody = ({ getTableBodyProps, page, prepareRow, onRowClicked }) => {
  // const { isOpen: isLendOpen, onOpen: onLendOpen, onClose: onLendClose } = useDisclosure();
  // const {
  //   isOpen: isMaterialOpen,
  //   onOpen: onMaterialOpen,
  //   onClose: onMaterialClose,
  // } = useDisclosure();
  // const [deleteMaterial, { data: mutationData, loading, error }] = useMutation(DELETE_MATERIAL);

  // const [updateMaterial, { data: editData, loading: editLoading, error: editError }] =
  //   useMutation(UPDATE_MATERIAL);
  // const toast = useToast();

  const { pathname } = useLocation();
  const history = useHistory();
  // const [modalInfo, setModalInfo] = useState({});
  // const [editable, setEditable] = useState(false);

  return (
    <>
      <Tbody {...getTableBodyProps()}>
        {page.map((row, index) => {
          prepareRow(row);

          return (
            <Tr
              key={index}
              _hover={{ backgroundColor: "lendlab.gray.100" }}
              {...row.getRowProps({
                onClick: (e) => {
                  if (e.target.tagName == "TD") {
                    if (pathname == "/app/prestamos") {
                      history.push(`/app/prestamo/${row.original.lendId}`);
                    } else if (pathname == "/app/materiales") {
                      history.push(`/app/material/${row.original.id_material}`);
                    }
                  }
                },
              })}
              cursor="pointer"
            >
              {row.cells.map((cell, index) => {
                return (
                  <Td key={index} {...cell.getCellProps} fontSize="2">
                    {cell.render("Cell")}
                  </Td>
                );
              })}
            </Tr>
          );
        })}
      </Tbody>

      {/* <Drawer
        hasDivider
        body={
          <Stack spacing={8}>
            <Stack alignItems="center" direction="row" justifyContent="space-between">
              <Stack alignItems="center" direction="row">
                <Prestamo />
                <Text fontSize="3">ID</Text>
              </Stack>
              <Text color="black" fontSize="3">
                {modalInfo.lendId}
              </Text>
            </Stack>
            <Stack alignItems="center" direction="row" justifyContent="space-between">
              <Stack alignItems="center" direction="row">
                <ProfileUser2 />
                <Text fontSize="3">Usuario</Text>
              </Stack>
              <Text color="black" fontSize="3">
                {modalInfo.user}
              </Text>
            </Stack>
            <Stack alignItems="center" direction="row" justifyContent="space-between">
              <Stack alignItems="center" direction="row">
                <Frame />
                <Text fontSize="3">Laboratorista</Text>
              </Stack>
              <Text color="black" fontSize="3">
                {modalInfo.laboratorist}
              </Text>
            </Stack>
            <Stack alignItems="center" direction="row" justifyContent="space-between">
              <Stack alignItems="center" direction="row">
                <SMS />
                <Text fontSize="3">Tipo</Text>
              </Stack>
              <Text color="black" fontSize="3">
                {modalInfo.type}
              </Text>
            </Stack>
            <Stack alignItems="center" direction="row" justifyContent="space-between">
              <Stack alignItems="center" direction="row">
                <Messages />
                <Text fontSize="3">Plazo</Text>
              </Stack>
              <Text color="black" fontSize="3">
                {modalInfo.term}
              </Text>
            </Stack>
            <Stack alignItems="center" direction="row" justifyContent="space-between">
              <Stack alignItems="center" direction="row">
                <Grid />
                <Text fontSize="3">Devolución</Text>
              </Stack>
              <Text color="black" fontSize="3">
                {modalInfo.devolution}
              </Text>
            </Stack>
          </Stack>
        }
        btnRef={btnRef}
        header={
          <Stack alignItems="center" direction="row" mt={5}>
            <Button variant="secondary">
              <Edit />
            </Button>
            <Button variant="secondary">
              <Trash />
            </Button>
          </Stack>
        }
        icon={Prestamo}
        isOpen={isLendOpen}
        placement="right"
        title={`Prestamo #${modalInfo.lendId}`}
        onClose={onLendClose}
      />

      <Drawer
        hasDivider
        body={
          <Formik
            initialValues={{
              nombre: modalInfo.nombre,
              etiqueta: modalInfo.etiqueta,
              categoria: modalInfo.categoria,
              descripcion: modalInfo.descripcion,
              cantidad: modalInfo.cantidad,
            }}
            onSubmit={(values) => {
              return updateMaterial({
                variables: {
                  updateMaterialData: values,
                  updateMaterialIdMaterial: modalInfo.id_material,
                },
                update: (cache) => {
                  cache.evict({ fieldName: "getMaterials" });
                  onMaterialClose();
                  toast({
                    title: `Se ha editado correctamente el material #${modalInfo.id_material}!`,
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
              <Form id="update-material-form">
                <Stack spacing={8}>
                  <Stack alignItems="center" direction="row" justifyContent="space-between">
                    <Stack alignItems="center" direction="row">
                      <Prestamo />
                      <Text fontSize="3">ID</Text>
                    </Stack>
                    <Text color="black" fontSize="3">
                      {modalInfo.id_material}
                    </Text>
                  </Stack>
                  <Stack alignItems="center" direction="row" justifyContent="space-between">
                    {!editable && (
                      <Stack alignItems="center" direction="row">
                        <ProfileUser2 />
                        <Text fontSize="3">Nombre</Text>
                      </Stack>
                    )}
                    {editable ? (
                      <FormControl
                        isLabelLeft
                        control="input"
                        label="Nombre"
                        name="nombre"
                        placeholder="Nombre"
                        type="text"
                      />
                    ) : (
                      <Text color="black" fontSize="3">
                        {modalInfo.nombre}
                      </Text>
                    )}
                  </Stack>
                  <Stack alignItems="center" direction="row" justifyContent="space-between">
                    {!editable && (
                      <Stack alignItems="center" direction="row">
                        <Frame />
                        <Text fontSize="3">Etiqueta</Text>
                      </Stack>
                    )}
                    {editable ? (
                      <FormControl
                        isLabelLeft
                        control="input"
                        label="Etiqueta"
                        name="etiqueta"
                        placeholder="Etiqueta"
                        type="text"
                      />
                    ) : (
                      <Text color="black" fontSize="3">
                        {modalInfo.etiqueta}
                      </Text>
                    )}
                  </Stack>
                  <Stack alignItems="center" direction="row" justifyContent="space-between">
                    {!editable && (
                      <Stack alignItems="center" direction="row">
                        <SMS />
                        <Text fontSize="3">Categoria</Text>
                      </Stack>
                    )}
                    {editable ? (
                      <FormControl
                        isLabelLeft
                        control="input"
                        label="Categoria"
                        name="categoria"
                        placeholder="Categoria"
                        type="text"
                      />
                    ) : (
                      <Text color="black" fontSize="3">
                        {modalInfo.categoria}
                      </Text>
                    )}
                  </Stack>
                  <Stack alignItems="center" direction="row" justifyContent="space-between">
                    {!editable && (
                      <Stack alignItems="center" direction="row">
                        <Messages />
                        <Text fontSize="3">Descripcion</Text>
                      </Stack>
                    )}
                    {editable ? (
                      <FormControl
                        isLabelLeft
                        control="input"
                        label="Descripcion"
                        name="descripcion"
                        placeholder="Descripcion"
                        type="text"
                      />
                    ) : (
                      <Text color="black" fontSize="3">
                        {modalInfo.descripcion}
                      </Text>
                    )}
                  </Stack>
                  <Stack alignItems="center" direction="row" justifyContent="space-between">
                    {!editable && (
                      <Stack alignItems="center" direction="row">
                        <Grid />
                        <Text fontSize="3">Cantidad</Text>
                      </Stack>
                    )}
                    {editable ? (
                      <FormControl
                        isLabelLeft
                        control="input"
                        label="Cantidad"
                        name="cantidad"
                        placeholder="cantidad"
                        type="number"
                      />
                    ) : (
                      <Text color="black" fontSize="3">
                        {modalInfo.cantidad}
                      </Text>
                    )}
                  </Stack>
                </Stack>
              </Form>
            )}
          </Formik>
        }
        btnRef={btnRef}
        footer={
          editable && (
            <Button form="update-material-form" type="submit" variant="primary">
              Guardar
            </Button>
          )
        }
        header={
          <Stack alignItems="center" direction="row" mt={5}>
            <Button variant="secondary" onClick={() => setEditable(!editable)}>
              {editable ? "X" : <Edit />}
            </Button>
            <Button isLoading={loading} variant="secondary">
              <Trash
                onClick={(e) => {
                  deleteMaterial({
                    variables: {
                      deleteMaterialIdMaterial: modalInfo.id_material,
                    },
                    update: (cache) => {
                      cache.evict({
                        id_material: "Material:" + modalInfo.id_material,
                      });
                      onMaterialClose();
                      toast({
                        title: `Se ha borrado el material #${modalInfo.id_material}!`,
                        description: "Lo has hecho correctamente c:",
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                      });
                    },
                  });
                }}
              />
            </Button>
          </Stack>
        }
        icon={Prestamo}
        isOpen={isMaterialOpen}
        placement="right"
        size={editable ? "md" : "xs"}
        title={`Material #${modalInfo.id_material}`}
        onClose={() => {
          onMaterialClose();
          setEditable(false);
        }}
      /> */}
    </>
  );
};
