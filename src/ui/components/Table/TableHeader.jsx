import { Th, Thead, Tr, chakra, Stack } from "@chakra-ui/react";
import React from "react";

export const TableHeader = ({ headerGroups }) => {
  return (
    <Thead>
      {headerGroups.map((headerGroup, index) => (
        <Tr key={index} {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column, index) => (
            <Th key={index}>
              <chakra.span color="black" {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
              </chakra.span>
              <chakra.span marginLeft="5">
                {column.isSorted ? (column.isSortedDesc ? "↓" : "↑") : null}
              </chakra.span>
              <Stack>{column.canFilter ? column.render("Filter") : null}</Stack>
            </Th>
          ))}
        </Tr>
      ))}
    </Thead>
  );
};
