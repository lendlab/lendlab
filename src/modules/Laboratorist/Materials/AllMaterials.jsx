import { useQuery } from "@apollo/client";
import { Badge, Stack } from "@chakra-ui/layout";
import { Table, Heading, Text, SkeletonTable } from "@ui";
import { GET_ALL_MATERIALS } from "@graphql/queries/materials";
import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/alert";
import empty from "@animations/empty.json";

export const AllMaterials = () => {
  const { loading, error, data } = useQuery(GET_ALL_MATERIALS);
  const container = useRef(null);

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

  const colorSchemes = {
    Bueno: "green",
    Roto: "red",
    Regular: "yellow",
  };

  const COLUMNS = [
    {
      Header: "ID",
      accessor: "id_material",
    },
    {
      Header: "Nombre",
      accessor: "nombre",
    },
    {
      Header: "Etiqueta",
      accessor: "etiqueta",
    },
    {
      Header: "Categoria",
      accessor: "categoria",
      Cell({ row }) {
        return <Badge>{row.original.categoria}</Badge>;
      },
    },
    {
      Header: "Descripcion",
      accessor: "descripcion",
    },
    {
      Header: "Cantidad",
      accessor: "cantidad",
    },
    {
      Header: "Foto",
      accessor: "foto",
    },
    {
      Header: "Estado",
      accessor: "estado",
      Cell({ row }) {
        return <Badge colorScheme={colorSchemes[row.original.estado]}>{row.original.estado}</Badge>;
      },
    },
  ];

  return (
    <>
      {data && data.getMaterials.length == 0 ? (
        <Stack align="center" justify="center">
          <Stack ref={container} h="200px" w="200px" />
          <Text color="lendlab.gray.400">Actualmente no hay materiales. Crea nuevos ya!</Text>
        </Stack>
      ) : (
        <Table columns={COLUMNS} data={data.getMaterials} placeholder="Buscar material" />
      )}
    </>
  );
};
