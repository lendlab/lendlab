import React from "react";
import { Table } from "@ui";
import { Badge, Stack } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { GET_ALL_USERS } from "@graphql/queries/users";
import moment from "moment";
import { useQuery } from "@apollo/client";

export const AllUsers = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading)
    return (
      <Stack alignItems="center" h="full" justifyContent="center" w="full">
        <Spinner color="blue.500" emptyColor="gray.200" size="xl" speed="0.65s" thickness="4px" />
      </Stack>
    );

  if (error) return <p>Oh no... {error.message}</p>;

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

  return <Table columns={COLUMNS} data={data.getUsers} />;
};
