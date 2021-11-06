import { Box, Icon, Stack, Table as ChakraTable, Text } from "@chakra-ui/react";
import React, { useEffect, useMemo } from "react";
import { FiFrown } from "react-icons/fi";
import { useFilters, useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";

import { TableBody } from "./TableBody";
import { TableColumnFilter } from "./TableColumnFilter";
import { TableGlobalFilter } from "./TableGlobalFilter";
import { TableHeader } from "./TableHeader";
import { TablePagination } from "./TablePagination";

export const Table = ({ data, columns, id, subscribeToNew }) => {
  const memoColumns = useMemo(() => columns, [columns]);
  const memoData = useMemo(() => data, [data]);

  useEffect(() => {
    {
      subscribeToNew && subscribeToNew();
    }
  }, [subscribeToNew]);

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
      <Box maxW="100%" mt={4} overflowX="auto">
        <ChakraTable variant="simple" {...getTableProps()} id={id} maxW="full" w="full">
          <TableHeader headerGroups={headerGroups} />
          {rows.length > 0 && (
            <TableBody getTableBodyProps={getTableBodyProps} page={page} prepareRow={prepareRow} />
          )}
        </ChakraTable>

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
      </Box>
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
