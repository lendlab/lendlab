import empty from "@animations/empty.json";
import { useQuery } from "@apollo/client";
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/alert";
import { Badge, Stack } from "@chakra-ui/layout";
import { GET_ALL_USERS } from "@graphql/queries/users";
import { SkeletonTable, Table, Text } from "@ui";
import Lottie from "lottie-web";
import moment from "moment";
import React, { useEffect, useRef } from "react";

export const AllUsers = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);
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
          Ha ocurrido un error: {error.message}
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          ¡No es tu culpa! Estamos trabajando para solucionarlo
        </AlertDescription>
      </Alert>
    );

  const COLUMNS = [
    {
      Header: "Cedula",
      accessor: "cedula",
    },
    {
      Header: "Nombre",
      accessor: "nombre",
    },
    {
      Header: "Direccion",
      accessor: "direccion",
    },
    {
      Header: "Avatar",
      accessor: "foto_usuario",
    },
    {
      Header: "Telefono",
      accessor: "telefono",
    },
    {
      Header: "Tipo de Usuario",
      accessor: "tipo_usuario",
      Cell({ row }) {
        return <Badge>{row.original.tipo_usuario}</Badge>;
      },
    },
    {
      Header: "Fecha de Nacimiento",
      accessor: "fecha_nacimiento",
      Cell({ row }) {
        const sqlDate = row.original.fecha_nacimiento;

        const date = moment(sqlDate).format("DD/MM/YYYY");

        return date;
      },
    },
  ];

  return (
    <>
      {data && data.getUsers.length == 0 ? (
        <Stack align="center" justify="center">
          <Stack ref={container} h="200px" w="200px" />
          <Text color="lendlab.gray.400">Actualmente no hay usuarios. Crea nuevos ya!</Text>
        </Stack>
      ) : (
        <Table columns={COLUMNS} data={data.getUsers} />
      )}
    </>
  );
};
