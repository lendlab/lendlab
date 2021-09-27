import { Button, Stack } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { Tbody, Td, Tr } from "@chakra-ui/table";
import React, { useState } from "react";
import { Text, Drawer } from "@ui";
import { Prestamo, ProfileUser2, Frame, SMS, Messages, Grid, Edit, Trash } from "@icons";

export const TableBody = ({ getTableBodyProps, page, prepareRow, onRowClicked }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
                    onOpen();
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
        isOpen={isOpen}
        placement="right"
        title={`Prestamo #${modalInfo.lendId}`}
        onClose={onClose}
      />
    </>
  );
};
