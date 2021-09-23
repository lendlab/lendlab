import React from "react";
import { TableColumnFilter } from "@ui";
import { Image } from "@chakra-ui/image";

export const COLUMNS = [
  {
    Header: "Cedula",
    accessor: "cedula",
  },
  {
    Header: "Avatar",
    accessor: "usuario",
    Cell({ row }) {
      return <Image src={row.original.usuario} />;
    },
    disableFilters: true,
    disableGlobalFilter: true,
  },
  {
    Header: "Nombre",
    accessor: "nombre",
  },
  {
    Header: "Telefono",
    accessor: "telefono",
  },
  {
    Header: "Tipo de Usuario",
    accessor: "tipo_de_usuario",
  },
  {
    Header: "Fecha de Nacimiento",
    accessor: "fecha_de_nacimiento",
  },
];
