import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  useRowSelect,
} from "react-table";
import { Table as ChakraTable } from "@chakra-ui/react";
import { Box, Drawer } from "@ui";
import { Trash } from "@icons";
import { useDisclosure } from "@chakra-ui/hooks";
import { useMutation } from "@apollo/client";

import { Checkbox } from "../Checkbox";
import { DELETE_MATERIAL } from "../../../graphql/mutations/materials";

import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import { TablePagination } from "./TablePagination";
import { TableSearch } from "./TableSearch";
import { TableColumnFilter } from "./TableColumnFilter";

export const Table = ({ data, columns: memoColumns, placeholder }) => {
  const columns = useMemo(() => memoColumns, []);
  const { onClose } = useDisclosure();
  const [deleteMaterial, { data: mutationData, loading, error }] = useMutation(DELETE_MATERIAL);
  const [message, setMessage] = React.useState("");

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
    setPageSize,
    selectedFlatRows,
    selectedRowIds,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      autoResetPage: false,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} onClick={(e) => e.stopPropagation()} />
            ),
            disableGlobalFilter: true,
          },
          ...columns,
        ];
      });
    }
  );

  const { globalFilter, pageIndex, pageSize } = state;

  React.useEffect(() => {
    if (selectedFlatRows.length == 1) {
      setMessage(`${selectedFlatRows.length} Seleccionado`);
    } else if (selectedFlatRows.length > 1 && selectedFlatRows.length !== rows.length) {
      setMessage(`${selectedFlatRows.length} Seleccionados`);
    } else if (selectedFlatRows.length == rows.length) {
      setMessage(`Todos seleccionados`);
    } else {
      setMessage("");
      onClose();
    }
  }, [selectedFlatRows]);

  return (
    <>
      <TableSearch
        globalFilter={globalFilter}
        pageSize={pageSize}
        placeholder={placeholder}
        rows={rows}
        setGlobalFilter={setGlobalFilter}
        setPageSize={setPageSize}
      />
      <Box maxW="100%" overflowX="scroll" overflowY="Hidden">
        <ChakraTable variant="simple" {...getTableProps()} maxW="full">
          <TableHeader headerGroups={headerGroups} />
          <TableBody getTableBodyProps={getTableBodyProps} page={page} prepareRow={prepareRow} />
        </ChakraTable>
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
      </Box>
      <Drawer
        hasNotBody
        hasNotCloseButton
        hasNotFooter
        hasNotOverlay
        isNotCenter
        isSpaceBetween
        isText
        blockScrollOnMount={false}
        closeOnOverlayClick={false}
        header={
          <Trash
            onClick={(e) => {
              const id_material = Number(
                selectedFlatRows.map((row) => {
                  return row.original.id_material;
                })
              );

              deleteMaterial({
                variables: {
                  deleteMaterialIdMaterial: id_material,
                },
                update: (cache) => {
                  cache.evict({
                    id_material: "Material:" + id_material,
                  });
                },
              });
            }}
          />
        }
        isOpen={selectedFlatRows.length > 0}
        placement="top"
        title={message}
        trapFocus={false}
        variant="alwaysOpen"
        onClose={onClose}
      />
    </>
  );
};
