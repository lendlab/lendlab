import React from "react";
import { Searchbar, Text, Select } from "@ui";
import { Stack, Icon, Center, Divider, Button } from "@chakra-ui/react";
import { Grid, List, Table } from "@icons";

export const TableSearch = ({
  globalFilter,
  setGlobalFilter,
  rows,
  setPageSize,
  pageSize,
  placeholder,
}) => {
  const options = [
    {
      key: 5,
      value: 5,
    },
    {
      key: 10,
      value: 10,
    },
    {
      key: 20,
      value: 20,
    },
    {
      key: 50,
      value: 50,
    },
  ];

  return (
    <>
      <Searchbar
        filter={globalFilter}
        options={[{ key: "Nasheee", value: "Nashee" }]}
        placeholder={placeholder}
        setGlobalFilter={setGlobalFilter}
      />
      <Stack alignItems="center" direction="row" justifyContent="space-between" marginTop="1em">
        <Text fontSize="14px">
          {rows.length} {rows.length == 1 ? "resultado" : "resultados"}
        </Text>
        <Stack alignItems="center" direction="row">
          <Text fontSize="14px">Cantidad de celdas</Text>
          <Select
            options={options}
            value={pageSize}
            w="auto"
            onChange={(e) => setPageSize(Number(e.target.value))}
          />
        </Stack>

        <Stack direction="row">
          <Button bg="lendlab.gray.100">
            <Icon as={Grid} h="none" w="none" />
          </Button>
          <Button bg="white">
            <Icon as={List} h="none" w="none" />
          </Button>
          <Button bg="white">
            <Icon as={Table} h="none" w="none" />
          </Button>
        </Stack>
      </Stack>
      <Center h={8}>
        <Divider />
      </Center>
    </>
  );
};
