import empty from "@animations/empty.json";
import { useMutation, useQuery } from "@apollo/client";
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/alert";
import { Button, IconButton } from "@chakra-ui/button";
import { Badge, Stack } from "@chakra-ui/layout";
import { SkeletonTable, Table, Text } from "@ui";
import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import { Options, Trash, Edit } from "@icons";
import { useToast } from "@chakra-ui/toast";
import { GET_ALL_LENDS } from "@graphql/queries/lends";

import { COLUMNS } from "./Table/columns";

export const AllLends = () => {
  const { loading, error, data } = useQuery(GET_ALL_LENDS);
  const container = useRef(null);
  const toast = useToast();
  // const [deleteLend, { data: dataDelete, loading: loadingDelete, error: deleteError }] =
  //   useMutation(DELETE_MATERIAL);

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: empty,
    });

    return () => {
      animation.destroy();
    };
  }, [loading, data]);

  if (loading) return <SkeletonTable />;

  if (error)
    return (
      <Alert
        alignItems="center"
        borderBottomRadius="18px"
        flexDirection="column"
        height="200px"
        justifyContent="center"
        status="error"
        textAlign="center"
        variant="subtle"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle fontSize="lg" mb={1} mt={4}>
          Ha ocurrido un error
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          ¡No es tu culpa! Estamos trabajando para solucionarlo
        </AlertDescription>
      </Alert>
    );

  return (
    <>
      {data && data.lend.length == 0 ? (
        <Stack align="center" justify="center">
          <Stack ref={container} h="200px" w="200px" />
          <Text color="lendlab.gray.400">Actualmente no hay prestamos. Crea nuevos ya!</Text>
        </Stack>
      ) : (
        <Table columns={COLUMNS} data={data.lend} placeholder="Buscar prestamo" />
      )}
    </>
  );
};
