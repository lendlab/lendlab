import { Tbody, Td, Tr } from "@chakra-ui/table";
import React from "react";
import { motion } from "framer-motion";
export const TableBody = ({ getTableBodyProps, page, prepareRow }) => {
  return (
    <>
      <Tbody {...getTableBodyProps()}>
        {page.map((row, index) => {
          prepareRow(row);

          return (
            <Tr
              key={index}
              animate={{ opacity: 1 }}
              as={motion.tr}
              className="tr"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              layoutId={index}
              {...row.getRowProps()}
            >
              {row.cells.map((cell, index) => {
                return (
                  <Td key={index} className="td" {...cell.getCellProps} fontSize="2">
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
