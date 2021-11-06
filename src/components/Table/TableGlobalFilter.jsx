import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import { FiSearch } from "react-icons/fi";
import Icon from "@chakra-ui/icon";

export const TableGlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);

  return (
    <InputGroup>
      <Input
        placeholder="Buscar.."
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
      <InputLeftElement
        children={<Icon as={FiSearch} color="lendlab.light.black.800" />}
        pointerEvents="none"
      />
    </InputGroup>
  );
};
