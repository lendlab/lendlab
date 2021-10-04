import { Skeleton } from "@chakra-ui/skeleton";
import { chakra } from "@chakra-ui/system";
import { Table as ChakraTable, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/table";
import React from "react";
import { Searchbar, Text, Select, Input } from "@ui";
import { Center, Divider, Stack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Icon } from "@chakra-ui/icon";
import { Grid, List, Table, Search } from "@icons";
import { InputLeftElement } from "@chakra-ui/input";

export const SkeletonTable = () => {
  return (
    <>
      <Skeleton borderRadius="14px">
        <Input placeholder="Buscar">
          <InputLeftElement children={<Search />} pointerEvents="none" />
        </Input>
      </Skeleton>

      <Skeleton borderRadius="14px">
        <Stack alignItems="center" direction="row" justifyContent="space-between" marginTop="1em">
          <Text fontSize="14px">resultados</Text>
          <Stack alignItems="center" direction="row">
            <Text fontSize="14px">Cantidad de celdas</Text>
            <Select options={[]} w="auto" />
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
      </Skeleton>
      <Skeleton borderRadius="14px">
        <ChakraTable mt={8} variant="simple">
          <Thead>
            <Tr>
              <Th>
                <chakra.span>LOREM IPSUM</chakra.span>
              </Th>
              <Th>
                <chakra.span>LOREM IPSUM</chakra.span>
              </Th>
              <Th>
                <chakra.span>LOREM IPSUM</chakra.span>
              </Th>
              <Th>
                <chakra.span>LOREM IPSUM</chakra.span>
              </Th>
              <Th>
                <chakra.span>LOREM IPSUM</chakra.span>
              </Th>
              <Th>
                <chakra.span>LOREM IPSUM</chakra.span>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </ChakraTable>
      </Skeleton>
    </>
  );
};
