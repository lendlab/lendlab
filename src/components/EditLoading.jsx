import React from "react";
import { Box, Container, Heading, Stack } from "@chakra-ui/layout";
import { FormLabel, Skeleton } from "@chakra-ui/react";

export const EditLoading = () => {
  return (
    <>
      <Box
        borderBottom="1px solid"
        borderBottomColor="lendlab.light.black.300"
        py={{ base: "12", md: "0" }}
      >
        <Container variant="normal">
          <Stack
            alignItems="center"
            direction={{ md: "row", base: "column" }}
            justifyContent={{ md: "space-between", base: "center" }}
            minH="44"
            w="full"
          >
            <Skeleton height="50px" my={4} w="60%" />
          </Stack>
        </Container>
      </Box>
      <Stack bg="lendlab.light.black.200">
        <Container py={8} variant="normal">
          <Stack spacing={4}>
            <Stack>
              <Skeleton height="10px" my={4} w="70px" />
              <Skeleton height="50px" my={4} w="100%" />
            </Stack>
            <Stack>
              <Skeleton height="10px" my={4} w="70px" />
              <Skeleton height="50px" my={4} w="100%" />
            </Stack>
            <Stack>
              <Skeleton height="10px" my={4} w="70px" />
              <Skeleton height="50px" my={4} w="100%" />
            </Stack>
            <Stack>
              <Skeleton height="10px" my={4} w="70px" />
              <Skeleton height="50px" my={4} w="100%" />
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};
