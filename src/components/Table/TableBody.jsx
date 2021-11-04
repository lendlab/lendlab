import { Tbody, Td, Tr } from "@chakra-ui/table";
import React from "react";

export const TableBody = ({ getTableBodyProps, page, prepareRow }) => {
  return (
    <>
      <Tbody {...getTableBodyProps()}>
        {page.map((row, index) => {
          prepareRow(row);

          return (
            <tr key={index} className="tr" {...row.getRowProps()}>
              {row.cells.map((cell, index) => {
                return (
                  <Td key={index} className="td" {...cell.getCellProps} fontSize="2">
                    {cell.render("Cell")}
                  </Td>
                );
              })}
            </tr>
          );
        })}
      </Tbody>
    </>
  );
};
