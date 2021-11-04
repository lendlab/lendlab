import { Table as ChakraTable, Box, Text, Stack, Icon } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useFilters, useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";
import { FiFrown } from "react-icons/fi";

import { TableBody } from "./TableBody";
import { TableColumnFilter } from "./TableColumnFilter";
import { TableGlobalFilter } from "./TableGlobalFilter";
import { TableHeader } from "./TableHeader";
import { TablePagination } from "./TablePagination";

export const Table = ({ data, columns, placeholder }) => {
  const memoColumns = useMemo(() => columns, [columns]);
  const memoData = useMemo(() => data, [data]);

  const defaultColumn = useMemo(() => {
    return { Filter: TableColumnFilter };
  }, []);

  const {
    state,
    rows,
    setGlobalFilter,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    prepareRow,
    gotoPage,
    pageCount,
  } = useTable(
    {
      columns: memoColumns,
      data: memoData,
      defaultColumn,
      autoResetPage: false,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <TableGlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      {rows.length > 0 && <Text mt={4}>{rows.length} resultados</Text>}
      <div className="wrapper">
        <div className="scroller">
          <ChakraTable className="nashe" variant="simple" {...getTableProps()} maxW="full" w="full">
            <TableHeader headerGroups={headerGroups} />
            {rows.length > 0 && (
              <TableBody
                getTableBodyProps={getTableBodyProps}
                page={page}
                prepareRow={prepareRow}
              />
            )}
          </ChakraTable>
        </div>
      </div>

      {rows.length < 1 && (
        <Stack
          alignItems="center"
          bg="white"
          border="1px solid"
          borderColor="lendlab.light.black.300"
          borderTop="none"
          direction="row"
          justifyContent="center"
          py={8}
        >
          <Icon as={FiFrown} color="lendlab.light.black.800" />
          <Text>No se encontraron resultados</Text>
        </Stack>
      )}
      {rows.length > 0 && (
        <TablePagination
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
          gotoPage={gotoPage}
          nextPage={nextPage}
          pageCount={pageCount}
          pageIndex={pageIndex}
          pageOptions={pageOptions}
          previousPage={previousPage}
        />
      )}
    </>
  );
};
