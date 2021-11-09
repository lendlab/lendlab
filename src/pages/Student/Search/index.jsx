import Icon from "@chakra-ui/icon";
import { Stack, Text } from "@chakra-ui/layout";
import Dashboard from "@components/Dashboard";
import MaterialSearchItem from "@components/MaterialSearchItem";
import { useMaterialSearch } from "@graphql/materials/custom-hooks";
import React from "react";
import { FiFrown } from "react-icons/fi";
import { useParams } from "react-router";

const Search = () => {
  const { material } = useParams();

  const { loading, data } = useMaterialSearch(material);

  if (loading || !data) return "loading...";

  return (
    <Dashboard hasNoActions title={material}>
      <Stack spacing="6">
        {data.getMaterialSearch.length > 0 ? (
          data.getMaterialSearch.map((material) => (
            <MaterialSearchItem key={material.id_material} material={material} />
          ))
        ) : (
          <Stack
            alignItems="center"
            bg="white"
            border="1px solid"
            borderColor="lendlab.light.black.300"
            direction="row"
            justifyContent="center"
            py={8}
            rounded="md"
          >
            <Icon as={FiFrown} color="lendlab.light.black.800" />
            <Text>No se encontraron resultados</Text>
          </Stack>
        )}
      </Stack>
    </Dashboard>
  );
};

export default Search;
