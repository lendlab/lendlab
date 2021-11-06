import { Th, Thead, Tr, chakra, Stack } from "@chakra-ui/react";
import React from "react";

export const TableHeader = ({ headerGroups }) => {
  return (
    <Thead>
      {headerGroups.map((headerGroup, index) => (
        <Tr key={index} {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column, index) => (
            <Th
              key={index}
              className="th"
              {...column.getHeaderProps(column.getSortByToggleProps())}
            >
              {column.render("Header")}
              {column.isSorted ? (column.isSortedDesc ? "↓" : "↑") : null}

              {/* <Stack>{column.canFilter ? column.render("Filter") : null}</Stack> */}
            </Th>
          ))}
        </Tr>
      ))}
    </Thead>
  );
};
