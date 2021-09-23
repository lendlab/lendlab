import React from "react";
import { TableColumnFilter } from "@ui";

export const COLUMNS = [
  {
    Header: "ID",
    accessor: "lendId",
  },
  {
    Header: "Usuario",
    accessor: "user",
  },
  {
    Header: "Laboratorista",
    accessor: "laboratorist",
  },
  {
    Header: "Tipo",
    accessor: "type",
  },
  {
    Header: "Reserva",
    accessor: "reserveId",
  },
  {
    Header: "Plazo",
    accessor: "term",
  },
  {
    Header: "Devolución",
    accessor: "devolution",
  },
];
