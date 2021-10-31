import { Tbody, Td, Tr } from "@chakra-ui/table";
import React from "react";
import { useHistory, useLocation } from "react-router";

export const TableBody = ({ getTableBodyProps, page, prepareRow, onRowClicked }) => {
  const { pathname } = useLocation();
  const history = useHistory();

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
                    if (pathname == "/dashboard/prestamos") {
                      history.push(`/dashboard/prestamo/${row.original.lendId}`);
                    } else if (pathname == "/dashboard/materiales") {
                      history.push(`/dashboard/material/${row.original.id_material}`);
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
    </>
  );
};
