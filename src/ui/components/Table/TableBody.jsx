import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Tbody, Td, Tr } from "@chakra-ui/table";
import React, { useState } from "react";

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
                  onOpen();
                  const { original: rowData } = row;

                  setModalInfo(rowData);
                },
              })}
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

      <Drawer finalFocusRef={btnRef} isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Prestamo: #{modalInfo.lendId}</DrawerHeader>

          <DrawerBody>Usuario: {modalInfo.user}</DrawerBody>

          <DrawerFooter>
            <Button mr={3} variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
