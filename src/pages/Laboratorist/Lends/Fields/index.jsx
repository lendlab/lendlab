import React from "react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteTag,
} from "@choc-ui/chakra-autocomplete";
import { Stack, Text } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Avatar } from "@chakra-ui/avatar";
import { Input } from "@chakra-ui/input";
import DatePicker from "react-datepicker";

const LendFields = ({ setFieldValue, users, materials, startDate, setStartDate }) => {
  return (
    <>
      <FormControl>
        <FormLabel>Usuario</FormLabel>
        <AutoComplete
          openOnFocus
          suggestWhenEmpty
          emptyState={<Text textAlign="center">No se encontraron opciones</Text>}
          onChange={(user) => {
            setFieldValue("user", user);
          }}
        >
          <AutoCompleteInput autoComplete="off" placeholder="ej. 5454548246" variant="outline" />
          <AutoCompleteList border="1px solid" borderColor="lendlab.light.black.300" shadow="none">
            {users.map((user, cid) => (
              <AutoCompleteItem
                key={`option-${cid}`}
                _focus={{ bg: "lendlab.light.black.300" }}
                _selected={{ bg: "lendlab.light.black.300" }}
                alignItems="center"
                direction="row"
                justifyContent="space-between"
                textTransform="capitalize"
                value={user.cedula.toString()}
              >
                <Stack alignItems="center" direction="row" spacing="4">
                  <Avatar alt={user.nombre} name={user.nombre} />
                  <Text>{user.nombre}</Text>
                </Stack>
                <Text>{user.cedula}</Text>
              </AutoCompleteItem>
            ))}
          </AutoCompleteList>
        </AutoComplete>
      </FormControl>

      <FormControl>
        <FormLabel>Materiales</FormLabel>
        <AutoComplete multiple openOnFocus onChange={(vals) => setFieldValue("materials", vals)}>
          <AutoCompleteInput variant="outline">
            {({ tags }) =>
              tags.map((tag, tid) => (
                <AutoCompleteTag key={tid} label={tag.label} onRemove={tag.onRemove} />
              ))
            }
          </AutoCompleteInput>
          <AutoCompleteList>
            {materials.map((material, cid) => (
              <AutoCompleteItem
                key={`option-${cid}`}
                _focus={{ bg: "lendlab.light.black.300" }}
                _selected={{ bg: "lendlab.light.black.300" }}
                textTransform="capitalize"
                value={material.id_material.toString()}
              >
                {material.nombre}
              </AutoCompleteItem>
            ))}
          </AutoCompleteList>
        </AutoComplete>
      </FormControl>

      <FormControl>
        <FormLabel>Fecha y hora</FormLabel>
        <DatePicker
          showTimeSelect
          customInput={<Input />}
          dateFormat="MMMM d, yyyy h:mm aa"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </FormControl>
    </>
  );
};

export default LendFields;
