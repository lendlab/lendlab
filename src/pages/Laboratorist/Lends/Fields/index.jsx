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

import { Field } from "../../../../components/Field";
import { HStack } from "@chakra-ui/react";

const LendFields = ({
  setFieldValue,
  users,
  materials,
  startDate,
  setStartDate,
}) => {
  return (
    <>
      <FormControl>
        <FormLabel>Usuario</FormLabel>
        <AutoComplete
          openOnFocus
          suggestWhenEmpty
          emptyState={
            <Text textAlign="center">No se encontraron opciones</Text>
          }
          onChange={(user) => {
            setFieldValue("user", user);
          }}
        >
          <AutoCompleteInput
            autoComplete="off"
            placeholder="ej. 5454548246"
            variant="outline"
          />
          <AutoCompleteList
            border="1px solid"
            borderColor="lendlab.light.black.300"
            shadow="none"
          >
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
        <AutoComplete
          multiple
          emptyState={
            <Text textAlign="center">No se encontraron opciones</Text>
          }
          openOnFocus
          onChange={(vals) => setFieldValue("materials", vals)}
        >
          <AutoCompleteInput variant="outline">
            {({ tags }) =>
              tags.map((tag, tid) => (
                <AutoCompleteTag
                  key={tid}
                  label={tag.label}
                  onRemove={tag.onRemove}
                />
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
                <HStack w="100%" justify="space-between">
                  <Text>
                    #{material.id_material} {material.nombre}
                  </Text>
                  <Text>{material.etiqueta}</Text>
                </HStack>
              </AutoCompleteItem>
            ))}
          </AutoCompleteList>
        </AutoComplete>
      </FormControl>
      <Field
        label="Fecha vencimiento"
        name="fecha_vencimiento"
        type="datetime-local"
      />
    </>
  );
};

export default LendFields;
