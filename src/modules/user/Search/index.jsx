import { Badge, Box, Container, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { useParams } from "react-router";
import { GET_MATERIAL_SEARCH } from "@graphql/mutations/materials";
import { useQuery } from "@apollo/client";
import { Heading } from "@ui";
import { Image } from "@chakra-ui/image";
import { Skeleton, SkeletonText } from "@chakra-ui/skeleton";

export const SearchPage = ({ history }) => {
  const { material } = useParams();
  const skeletonsToRender = [1, 2, 3];

  const { data, error } = useQuery(GET_MATERIAL_SEARCH, {
    variables: { nombre: material },
  });

  const loading = true;

  if (loading && !data)
    return (
      <Stack mt={8} spacing={12}>
        {skeletonsToRender.map((_, index) => (
          <Stack key={index} borderRadius="14px" direction="row" p={6} shadow="base">
            <Skeleton borderRadius="14px" boxSize="120px" />

            <Stack direction="column" spacing={6} w="full">
              <Skeleton height="20px" w="15%" />
              <SkeletonText noOfLines={4} spacing="2" />
            </Stack>
          </Stack>
        ))}
      </Stack>
    );

  return (
    <Box mt={8}>
      <Stack spacing={12}>
        {data.getMaterialSearch.length < 1 ? (
          <Heading>¡La busqueda no arrojo resultados! Intenta con otro material</Heading>
        ) : (
          data.getMaterialSearch.map((material) => (
            <Stack
              key={material.id_material}
              _hover={{ bg: "lendlab.gray.100" }}
              borderRadius="14px"
              cursor="pointer"
              direction="row"
              p={6}
              shadow="base"
            >
              <Image
                borderRadius="14px"
                boxSize="120px"
                fallbackSrc="/images/fallback.jpg"
                objectFit="cover"
                src={material.foto}
              />
              <Stack w="full">
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

                <Text>{material.descripcion}</Text>
              </Stack>
            </Stack>
          ))
        )}
      </Stack>
    </Box>
  );
};
