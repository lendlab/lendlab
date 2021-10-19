import empty from "@animations/empty.json";
import { useMutation, useQuery } from "@apollo/client";
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/alert";
import { Button } from "@chakra-ui/button";
import { Badge, Stack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { DELETE_MATERIAL } from "@graphql/mutations/materials";
import { GET_ALL_MATERIALS } from "@graphql/queries/materials";
import { Edit, Trash } from "@icons";
import { SkeletonTable, Table, Text } from "@ui";
import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

export const AllMaterials = () => {
  const { loading, error, data } = useQuery(GET_ALL_MATERIALS, {
    pollInterval: 500,
  });
  const container = useRef(null);
  const toast = useToast();
  const [deleteMaterial, { data: dataDelete, loading: loadingDelete, error: deleteError }] =
    useMutation(DELETE_MATERIAL);

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

  if (loading)
    return (
      <Helmet>
        <title>cargando... | lendlab</title>
        <SkeletonTable />
      </Helmet>
    );

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
          Ha ocurrido un error: {error.message}
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
      Cell({ row }) {
        return <Badge>{row.original.id_material}</Badge>;
      },
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
    {
      header: "",
      id: "click-me-button",
      Cell({ row }) {
        return (
          <Stack direction="row">
            <Button
              isLoading={loadingDelete}
              variant="ghost"
              onClick={() => {
                deleteMaterial({
                  variables: {
                    idMaterial: row.original.id_material,
                  },
                  update: (cache) => {
                    cache.evict({
                      id_material: "Material:" + row.original.id_material,
                    });
                    toast({
                      title: `Se ha borrado el material #${row.original.id_material}!`,
                      description: "Lo has hecho correctamente c:",
                      status: "success",
                      duration: 2000,
                      isClosable: true,
                    });
                  },
                });
              }}
            >
              <Trash />
            </Button>
            <Button variant="ghost">
              <Edit />
            </Button>
          </Stack>
        );
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
