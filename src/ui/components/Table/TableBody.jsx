import { Button, Stack } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { Tbody, Td, Tr } from "@chakra-ui/table";
import React, { useState } from "react";
import { Text, Drawer } from "@ui";
import { Prestamo, ProfileUser2, Frame, SMS, Messages, Grid, Edit, Trash } from "@icons";
import { useLocation } from "react-router";
import { DELETE_MATERIAL } from "../../../graphql/mutations/materials";
import { useMutation } from "@apollo/client";

export const TableBody = ({ getTableBodyProps, page, prepareRow, onRowClicked }) => {
  const { isOpen: isLendOpen, onOpen: onLendOpen, onClose: onLendClose } = useDisclosure();
  const {
    isOpen: isMaterialOpen,
    onOpen: onMaterialOpen,
    onClose: onMaterialClose,
  } = useDisclosure();
  const btnRef = React.useRef();
  const [deleteMaterial, { data: mutationData, loading, error }] = useMutation(DELETE_MATERIAL);


  const { pathname } = useLocation();

  const [modalInfo, setModalInfo] = useState({});

  return (
    <>
      <Tbody {...getTableBodyProps()}>
        {page.map((row, index) => {
          prepareRow(row);

          return (
            <Tr
              key={index}
              {...row.getRowProps({
                onClick: (e) => {
                  if (e.target.tagName == "TD") {
                    if (pathname == "/app/prestamos") {
                      onLendOpen();
                    } else if (pathname == "/app/materiales") {
                      onMaterialOpen();
                    }
                    const { original: rowData } = row;

                    setModalInfo(rowData);
                  }
                },
              })}
              cursor="pointer"
            >
              {row.cells.map((cell, index) => {
                return (
                  <Td key={index} {...cell.getCellProps}>
                    {cell.render("Cell")}
                  </Td>
                );
              })}
            </Tr>
          );
        })}
      </Tbody>

      <Drawer
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
              <Stack alignItems="center" direction="row">
                <ProfileUser2 />
                <Text fontSize="3">Nombre</Text>
              </Stack>
              <Text color="black" fontSize="3">
                {modalInfo.nombre}
              </Text>
            </Stack>
            <Stack alignItems="center" direction="row" justifyContent="space-between">
              <Stack alignItems="center" direction="row">
                <Frame />
                <Text fontSize="3">Etiqueta</Text>
              </Stack>
              <Text color="black" fontSize="3">
                {modalInfo.etiqueta}
              </Text>
            </Stack>
            <Stack alignItems="center" direction="row" justifyContent="space-between">
              <Stack alignItems="center" direction="row">
                <SMS />
                <Text fontSize="3">Categoria</Text>
              </Stack>
              <Text color="black" fontSize="3">
                {modalInfo.categoria}
              </Text>
            </Stack>
            <Stack alignItems="center" direction="row" justifyContent="space-between">
              <Stack alignItems="center" direction="row">
                <Messages />
                <Text fontSize="3">Descripcion</Text>
              </Stack>
              <Text color="black" fontSize="3">
                {modalInfo.descripcion}
              </Text>
            </Stack>
            <Stack alignItems="center" direction="row" justifyContent="space-between">
              <Stack alignItems="center" direction="row">
                <Grid />
                <Text fontSize="3">Cantidad</Text>
              </Stack>
              <Text color="black" fontSize="3">
                {modalInfo.cantidad}
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
            <Button variant="secondary" isLoading={loading}>
              <Trash onClick={(e) => {
              deleteMaterial({
                variables: {
                  deleteMaterialIdMaterial: modalInfo.id_material,
                },
                update: (cache) => {
                  cache.evict({
                    id_material: "Material:" + modalInfo.id_material,
                  });
                  onMaterialClose();
                },
              });
            }
            
            }/>
            </Button>
          </Stack>
        }
        icon={Prestamo}
        isOpen={isMaterialOpen}
        placement="right"
        title={`Material #${modalInfo.id_material}`}
        onClose={onMaterialClose}
      />
    </>
  );
};
