import { Badge } from "@chakra-ui/layout";
import React from "react";
import { momentizeDate } from "@utils/momentizeDate";

export const COLUMNS = [
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
      const { slashedFormattedDate } = momentizeDate(row.original.fecha_nacimiento);

      return slashedFormattedDate;
    },
  },
];
