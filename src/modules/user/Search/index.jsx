import { Badge, Box, Container, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { useParams } from "react-router";
import { GET_MATERIAL_SEARCH } from "@graphql/mutations/materials";
import { useQuery } from "@apollo/client";
import { Heading } from "@ui";
import { Image } from "@chakra-ui/image";

export const SearchPage = ({ history }) => {
  const { material } = useParams();

  const { loading, data, error } = useQuery(GET_MATERIAL_SEARCH, {
    variables: { nombre: material },
  });

  if (loading && !data) return "loading...";

  return (
    <Box mt={8}>
      <Stack spacing={8}>
        {data.getMaterialSearch.length < 1 ? (
          <Heading>No resultados</Heading>
        ) : (
          data.getMaterialSearch.map((material) => (
            <Stack key={material.id_material} borderRadius="14px" direction="row" p={6} shadow="sm">
              <Image
                borderRadius="14px"
                boxSize="120px"
                fallbackSrc="/images/fallback.jpg"
                objectFit="cover"
                src={material.foto}
              />
              <Stack
                flex
                alignItems="start"
                direction="row"
                h="auto"
                justifyContent="space-between"
                w="full"
              >
                <Text fontSize="4" fontWeight="bold" textAlign="left">
                  {material.nombre}
                </Text>
                <Badge boxSize="auto">{material.categoria}</Badge>
              </Stack>
            </Stack>
          ))
        )}
      </Stack>
    </Box>
  );
};
