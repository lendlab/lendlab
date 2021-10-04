import React from "react";
import { Stack, StackDivider, InputLeftElement } from "@chakra-ui/react";
import { Select, Input } from "@ui";
import { Search } from "@icons";
import { useAsyncDebounce } from "react-table";

export const Searchbar = React.memo(({ options, filter, setGlobalFilter, placeholder }) => {
  const [value, setValue] = React.useState(filter);

  const handleChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 500);

  return (
    <Input
      isGlobalFilter
      placeholder={placeholder}
      setGlobalFilter={setGlobalFilter}
      setValue={setValue}
      value={value || ""}
      onChange={(e) => {
        setValue(e.target.value);
        handleChange(e.target.value);
      }}
    >
      <InputLeftElement children={<Search />} pointerEvents="none" />
    </Input>
  );
});
